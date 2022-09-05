import React, { useState, useRef, useCallback, SelectHTMLAttributes } from "react";
import { SelectContainer } from "./styles";
import { SelectList } from "../../../../Utils/SelectList";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    value: string;
    name: string;
    options: SelectList[];
    pixels?: number;
    key?: string;
    selected?: boolean;
    color?: string;
    class?: string;
    disable?: boolean;
    subList?: SelectProps[];
    label: string;
}

export const Select: React.FC<SelectProps> = ({ id, name, value, options, label, pixels, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    const inputRef = useRef<HTMLSelectElement>(null);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return (
        <SelectContainer pixels={pixels} focus={isFocused}>
            <label htmlFor={id}>{label}</label>
            <br />
            <select
                ref={inputRef}
                name={name}
                id={id}
                value={value}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...props}>
                <option
                    value=""
                    disabled
                    >Selecione
                </option>
                {options?.map((item, index) => {
                            return (
                                <option key={index} value={item.key}>{item.value}</option>        
                            )
                        }
                    )
                }
            </select>
        </SelectContainer>
    );
}