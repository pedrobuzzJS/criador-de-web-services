import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String
}

export const Button: React.FC = () => {
    return (
        <>
            <h1>button</h1>
        </>
    );
};