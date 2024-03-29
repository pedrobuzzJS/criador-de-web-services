import React, { useCallback } from "react";
import { Container,
     TableContainer,
     TableRows,
     ButtonContainerGrid,
     ButtonContainer } 
from "./styles";
import { GridFields, FieldTypes } from "../../Utils/Fields";
import { useNavigate } from "react-router-dom";
import { Button } from "../Form/Button/Button";
import { Operation } from "../../Utils/Operations";
import useButtonStore from "../../stores/ButtonStore";

interface GridProps {
    columns: GridFields[],
    data: any,
    loading?: boolean,
    pathMantencao?: string;
};

export const DataGrid: React.FC<GridProps> = ({ columns, data, loading, pathMantencao, ...props }) => {
    const teste: any[] = data; 
    const navigate = useNavigate();
    const addButtonAction = useButtonStore(state => state.addButton);
    const cleanButtonAction = useButtonStore(state => state.cleanButton);

    const buildMaintenanceURL = useCallback( (btn: string, op: number, id?: any) => {
        let url = btn + "-manutencao" + `/${op}` + `/${id}`;
        return navigate("/"+url);
    }, [navigate]);

    const buttonInserFormValues = useCallback( (op: number) => {
        let url = pathMantencao + "-manutencao" + `/${op}`;
        return navigate("/"+url);
    }, [navigate] );

    const handdleSelectButtonActions = useCallback( async (btn: string, operation: number, id: number) => {
        switch(operation) {
            case Operation.ALTER:
                await cleanButtonAction();
                await buildMaintenanceURL(btn, operation, id);
            break;
            case Operation.DELETE:
                await cleanButtonAction();
                await buildMaintenanceURL(btn, operation, id);
            break;
            case Operation.VIEW:
                await cleanButtonAction();
                await buildMaintenanceURL(btn, operation, id);
            break;
            default:
                await addButtonAction({
                    button: btn,
                    action: operation,
                    id: id,
                    title: "",
                });
            break;
        }
    }, [addButtonAction, buildMaintenanceURL]);

    return (
        <Container>
            {loading ? 
                <h1>Carregando</h1> 
                :
                <>
                    <ButtonContainer>
                        <Button
                            buttonDescription="Inserir"
                            size="prettySmall"
                            onClick={() => buttonInserFormValues(
                                2
                            )}
                        />
                    </ButtonContainer>
                    <TableContainer>
                        <thead>
                            <tr>
                                {columns && columns.map( (column, index) => (
                                    <th key={index}>{column.title}</th>
                                ) )}
                            </tr>
                        </thead>
                        <tbody>
                            {teste && teste?.map((item, index) => (
                                <TableRows key={index} isOdd={Boolean(index%2)}>
                                    {columns && columns.map( (column, index) => (
                                    column.type === FieldTypes.TEXT ?
                                        <td key={index}>
                                            {item[column?.field]}
                                        </td>
                                        :
                                        column.type === FieldTypes.BUTTON ?
                                        <td key={index}>
                                            <ButtonContainerGrid key={index}>
                                                {column.buttons?.map((btn, index) => (
                                                    <Button
                                                        key={index}
                                                        size="prettySmall"
                                                        buttonDescription={btn.title}
                                                        onClick={() => handdleSelectButtonActions(
                                                            btn.button,
                                                            btn.action,
                                                            item.id,
                                                        )}
                                                        
                                                    />
                                                ))}
                                            </ButtonContainerGrid>
                                        </td>
                                        :
                                        <td key={index}></td>
                                ) )}
                                </TableRows>
                            ))}
                        </tbody>
                    </TableContainer>
                </>
            }
        </Container>
    )
};