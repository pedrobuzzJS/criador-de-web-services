import React, { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import { emailValidation } from "../../FormValidations/FormValidations";
import { cep, cpf, currency, nullMask } from "../Masks/Masks";
import { InputContainer } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type:   "text" | "email" | "password" | "button" | 
            "color" | "file" | "cpf" | "currency" | "cep" | "textarea";
    prefix?: string;
    spanText?: string;
    percent?: string;
    label: string;
    id: string;
}

const Input: React.FC<InputProps> = ({ id, name, type, prefix, spanText, percent, label, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    const [ isFilled, setIsFilled ] = useState<Boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleKeyUp = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {        
            if (type === "cep") {
                cep(e);
            }
            if (type === "currency") {
                currency(e);
            }
            if (type === "cpf") {
                cpf(e);
            }
            if (type === "email") {
                emailValidation(e);
            }
            if (!type) {
                nullMask(e);
            }
        }, 
        [type]
    );

    return (
        <InputContainer percent={percent}>
            {spanText && <span>{spanText}</span>}
            {/* <br /> */}
            <label htmlFor={id}><span>{label}</span></label>
            {prefix && <span>{prefix}</span>}
            <input ref={inputRef} type={type} {...props} onKeyDown={handleKeyUp} id={id} />
        </InputContainer>
    )
};

export default Input;