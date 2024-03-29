import React, { InputHTMLAttributes, useCallback, useRef, useState } from "react";
import { emailValidation } from "../../FormValidations/FormValidations";
import { cep, cpf, currency, nullMask } from "../Masks/Masks";
import { InputContainer } from "./styles";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
    // type:   "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
    //         | "currency" | "cep" | "date" | "number";
    type:   any;
    prefix?: string;
    spanText?: string;
    percent?: string;
    label: any;
    id: any;
    pixels?: string;
};

const Input: React.FC<InputProps> = ({ name, id, type, prefix, spanText, percent, label, pixels, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    // const [ isFilled, setIsFilled ] = useState<Boolean>(false);
    const [ inputErro, setInputErro ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleInputError = useCallback(() => {

    }, []);
    
    const handleKeyDown = useCallback(
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
        <InputContainer
            percent={percent}
            focus={isFocused}
            pixels={pixels}
            error={inputErro}
        >
            <label
            htmlFor={id}
                >
                {label}
            </label>
            <br />
            <input
                ref={inputRef}
                name={name}
                type={type}
                onKeyDown={handleKeyDown}
                id={id}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}
            />
        </InputContainer>
    );
};

export default Input;