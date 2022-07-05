import React, { InputHTMLAttributes, useCallback } from "react";
import { currency, cep, cpf } from "../Masks/Masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "cpf" | "currency" | "cep";
    prefix?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, ...props }) => {
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
        }, 
        [mask]
    );

    return (
        <div>
            {prefix && <span>{prefix}</span>}
            <input { ...props } onKeyUp={handleKeyUp} />
        </div>
    )
};

export default Input;