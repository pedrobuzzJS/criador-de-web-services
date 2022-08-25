import styled, { css } from "styled-components";

interface ButtonProps {
    size?: string;
}

export const ButtonContainer = styled.div``;

export const ButtonStyle = styled.button<ButtonProps>`
    background-color: pink;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid purple;

    ${props => props?.size === "big" && css`
        font-size: 32px;
        padding: 20px;
    `}
`;