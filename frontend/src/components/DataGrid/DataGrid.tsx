import React, { useCallback, useState } from "react";
// import DataGrid from 'react-data-grid';
import { Container, TableContainer, TableRows } from "./styles";
import { GridFields } from "../../Utils/Fields";
interface GridProps {
    columns: GridFields[],
    data: any,
    loading?: boolean
};

export const DataGrid: React.FC<GridProps> = ({ columns, data, loading, ...props }) => {
    const teste: any[] = data; 
    const [ order, setOrder ] = useState<String>('');

    const buildMaintenanceURL = useCallback( () => {
        
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
                                <td key={index}>
                                    {item[column?.field]}                                    
                                </td>
                            ) )}
                            </TableRows>
                        ))}
                    </tbody>
                </TableContainer>
            }
        </Container>
    )
};