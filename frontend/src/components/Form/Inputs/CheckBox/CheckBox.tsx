import React, { useState, useCallback, InputHTMLAttributes } from "react";
import { CheckBoxContainer } from "./styles";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    label: string;
    percent?: string;
    pixels?: number;
};

export const CheckBox: React.FC<CheckBoxProps> = ({id, name, label, ...props}) => {
    return (
        <CheckBoxContainer>
            <label
                htmlFor={id}
                >
                {label}
            </label>
            <input
                type="checkbox"
                name={name}
                id={id}
                {...props}
            />
        </CheckBoxContainer>
    );
};