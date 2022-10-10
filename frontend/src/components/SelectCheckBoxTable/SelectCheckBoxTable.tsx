import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UseButtonStore from "../../stores/buttonStore";
import { FieldTypes, GridFields } from "../../Utils/Fields";
import { Operation } from "../../Utils/Operations";
import { Button } from "../Form/Button/Button";
import { ButtonContainer, ButtonContainerGrid, Container, TableContainer, TableRows } from "./styles";

interface GridProps {
    columns: GridFields[],
    data: any,
    loading?: boolean
};

export const SelectCheckBoxTable: React.FC<GridProps> = ({ columns, data, loading, ...props }) => {
    const teste: any[] = data; 
    const navigate = useNavigate();
    const addButtonAction = UseButtonStore(state => state.addButton);
    const cleanButtonAction = UseButtonStore(state => state.cleanButton);

    return (
        <Container>
            {loading ? 
                <h1>Carregando</h1> 
                :
                <>
                    <TableContainer>
                        <thead>
                            <tr>
                                {columns && columns.map( (column, index) => (
                                    column.type === FieldTypes.CHECKBOX ?
                                    <input type="checkbox" id="all" name="all"></input>
                                    :
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
                                        column.type === FieldTypes.CHECKBOX ? 
                                        <input type="checkbox" id="horns" name="horns"></input>
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