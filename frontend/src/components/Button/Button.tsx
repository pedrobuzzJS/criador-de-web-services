import React, { ButtonHTMLAttributes } from "react";
import { Container } from "../ToolBar/style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String
}

export const ButtonC: React.FC<ButtonProps> = ({ buttonDescription, ...props }) => {
    return (
        <Container>
            <button>{buttonDescription}</button>
        </Container>
    );
}