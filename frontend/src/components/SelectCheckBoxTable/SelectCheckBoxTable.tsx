import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useButtonStore from "../../stores/ButtonStore";
import { FieldTypes, GridFields } from "../../Utils/Fields";
import { Container, TableContainer, TableRows, CheckBoxContainer } from "./styles";
import UseColunaStore from "../../stores/ColunaStore";
import { eventNames } from "process";

interface GridProps {
    columns: GridFields[],
    data: any,
    loading?: boolean
};

export const SelectCheckBoxTable: React.FC<GridProps> = ({ columns, data, loading, ...props }) => {
    const teste: any[] = data; 
    const navigate = useNavigate();
    const addButtonAction = useButtonStore(state => state.addButton);
    const cleanButtonAction = useButtonStore(state => state.cleanButton);
    const addColuna = UseColunaStore(state => state.addColuna);

    const handleCheckBoxChange = (e: any, item: any) => {
        addColuna(item);
    };

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
                                    <th key={index}>
                                        {/* <input type="checkbox" id="all" name="all"></input> */}
                                        #
                                    </th>
                                    :
                                    <th key={index}>
                                        {column.title}
                                    </th>
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
                                        <td key={index}>
                                            <CheckBoxContainer key={index}>
                                                <input
                                                    key={index}
                                                    type="checkbox"
                                                    name="coluna"
                                                    onChange={(e) => handleCheckBoxChange(e, item)}
                                                >
                                                </input>
                                            </CheckBoxContainer>
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