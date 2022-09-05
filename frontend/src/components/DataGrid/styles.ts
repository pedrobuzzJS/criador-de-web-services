import styled, { css } from "styled-components";

export const Container = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`;

export const TableContainer = styled.table`
    width: 85%;
    margin: 0 auto;
    border-collapse: collapse;

    th
        {
            padding: 10px;
            background: #bcbcbc;
            text-align: left;
        }
        
    tbody {
        width: 100%;
    }
`;

interface TableRowProps {
    isOdd?: boolean
}

export const TableRows = styled.tr<TableRowProps>`
    text-align: left;
    border-bottom: 1px solid #bcbcbc;
    line-height: 15px;
    background: ${props => props.isOdd? "#dddddd" : ""};

    &:hover {
        background: #b0acac;
    }

    td {
        padding: 10px;
        text-align: left;
    }
`;