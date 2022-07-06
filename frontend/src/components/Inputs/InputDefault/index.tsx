import React, { InputHTMLAttributes, useCallback } from "react";
import { currency, cep, cpf, nullMask } from "../Masks/Masks";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "email" | "password" | "button" | "color" | "file";
    mask?: "cpf" | "currency" | "cep";
    prefix?: string;
    spanText?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, spanText, ...props }) => {
    const handleKeyUp = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {        
            if (mask === "cep") {
                cep(e);
            }
            if (mask === "currency") {
                currency(e);
            }
            if (mask === "cpf") {
                cpf(e);
            }
            if (!mask) {
                nullMask(e);
            }
        }, 
        [mask]
    );

    return (
        <div>
            {spanText && <span>{spanText}</span>}
            <br />
            {prefix && <span>{prefix}</span>}
            <input { ...props } onKeyUp={handleKeyUp} />
        </div>
    )
};

export default Input;