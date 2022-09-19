import React, { useRef, ButtonHTMLAttributes } from "react";
import { ButtonContainer, ButtonStyle } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String;
    icon?: string;
    hasBackGround?: boolean;
    size?: "big" | "small" | "prettySmall";
    color?: "pink" | "purble" | "lightblue";
};

export const Button: React.FC<ButtonProps> = ({ buttonDescription, size, color, icon, hasBackGround, ...props }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <ButtonContainer>
            <ButtonStyle
                size={size}
                ref={buttonRef}
                color={color}
                {...props}>
                {buttonDescription}
            </ButtonStyle>
        </ButtonContainer>
    );
};