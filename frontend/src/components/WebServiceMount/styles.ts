import styled, { css } from "styled-components";

// export const Grid = styled.div`
//     display: grid;
//     grid-template-columns: 1300px auto;
//     grid-template-rows: auto auto;
//     grid-template-areas: 
//         'MN'
//     ;
//     height: 550px;
//     border: 2px solid black;
    // border-radius: 0.25rem;
//     display: flex;
// `;

export const MountArea = styled.div`
    width: 90%;
    display: flex;
    height: 550px;
    border: 2px solid black;
    /* border-radius: 0.25rem; */
`;

export const Header = styled.header`
    width: 100%;
    max-height: 70px;
    left: 0;
    right: 0;
    /* border: 1px solid tomato; */
`;

export const Footer = styled.footer`
    width: 100%;
    padding-bottom: 50px;
`;

export const TableList = styled.div`
    width: 1350px;
    height: 100%;
    /* border: 1px solid tomato; */
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const TablesSelection = styled.div`
    width: 300%;
    height: 100%;
    border-right: 2px solid black;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface TableModal {
    canUse: boolean;
};

export const TableModal = styled.div<TableModal>`
    border: 2px solid black;
    height: 60px;
    border-radius: 0.25rem;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 7px;
    margin-right: 7px;
    background: none;
    pointer-events: all;
    cursor: pointer;
    display: flex;
    justify-content: center;                                                                                                                                                    

    > span {
        padding-top: 15px;
    }

    ${props => props?.canUse === false && css`
        background: lightgray;
        pointer-events: none;
    `}
`;

export const ModalContainer = styled.div`
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const TableColumn = styled.div`
    width: 98%;
    margin: 2px;
    padding-bottom: 45px;
    border: 2px solid black;
    /* border-radius: 0.25rem; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    margin-top: 7px;

    > span {
        padding: 7px;
    }
`;

export const ImageCloseDiv = styled.div`
    display: block;
    padding: 10px;
    cursor: pointer;

    > svg {
        color: #c71c1c;
    }
`;

export const ButtonDiv = styled.div`
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    width: 90%;
    padding: 50px;
    display: flex;
    justify-content: end;
`;

export const TableContainer = styled.table`
    width: 90%;
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
};

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