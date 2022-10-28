import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const L1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50%;
    /* background: black; */
    @media (max-width: 1266px) {
        width: 100%;
    }
`;

export const L2 = styled.div`
    height: 100vh;
    width: 50%;
    background: blue;
    @media (max-width: 1266px) {
        display: none;
    }
`;