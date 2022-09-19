import React, { useCallback, useState } from "react";
// import DataGrid from 'react-data-grid';
import { Container, TableContainer, TableRows, ButtonContainerGrid } from "./styles";
import { GridFields, FieldTypes } from "../../Utils/Fields";
import { useNavigate } from "react-router-dom";
import { Button } from "../Form/Button/Button";
interface GridProps {
    columns: GridFields[],
    data: any,
    loading?: boolean
};

export const DataGrid: React.FC<GridProps> = ({ columns, data, loading, ...props }) => {
    const teste: any[] = data; 
    const navigate = useNavigate();
    const [ order, setOrder ] = useState<String>('');

    const buildMaintenanceURL = useCallback( (btn: string, operation: number, key?: any) => {
        let url = btn + "-manutencao" + `/${operation}` + `/${key}`; 
        return navigate("/"+url);
    }, []);

    return (
        <Container>
            {loading ? 
                <h1>Carregando</h1> 
                :  
                <TableContainer>
                    <thead>
                        <tr>
                            {columns && columns.map( (column, index) => (
                                <th key={index}>{column.tittle}</th>
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
                                                    buttonDescription={btn.tittle}
                                                    onClick={() => buildMaintenanceURL(
                                                        btn.button,
                                                        btn.action,
                                                        item.id
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
            }
        </Container>
    )
};