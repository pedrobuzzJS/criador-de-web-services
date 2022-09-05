import styled, { css } from "styled-components";

interface ButtonProps {
    size?: string;
}

export const ButtonContainer = styled.div`
`;

export const ButtonStyle = styled.button<ButtonProps>`
    background-color: pink;
    padding: 20px 55px 20px 55px;
    border-radius: 5px;
    border: 1px solid purple;
    /* width: 100%; */
    cursor: pointer;

    ${props => props?.size === "big" && css`
        font-size: 32px;
        padding: 20px;
    `}
`;