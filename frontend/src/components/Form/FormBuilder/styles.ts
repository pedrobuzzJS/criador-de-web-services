import styled from "styled-components";

export const SuperContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
`;

export const Container = styled.div`
    width: 85%;
    /* margin: 50px auto; */
    padding: 30px;
    background: lightgray;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    > div {
        /* flex: 0 0 33.3333%; */
    }
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;