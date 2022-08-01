import styled from "styled-components";

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 200px auto;
    grid-template-rows: 100vh auto;

    grid-template-areas: 
        'MN CT'
    ;

    height: 100vh;
`;