import React, { useRef, ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonStyle } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String
    size?: "big" | "small";
}

export const Button: React.FC<ButtonProps> = ({ buttonDescription, size, ...props }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <ButtonContainer>
            <ButtonStyle size={size} ref={buttonRef} {...props}>
                {buttonDescription}
            </ButtonStyle>
        </ButtonContainer>
    );
};