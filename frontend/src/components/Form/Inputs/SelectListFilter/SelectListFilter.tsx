import React, { useCallback, useRef, useState } from "react";
import { SelectProps } from "../Select/Select";
import { SelectContainer } from "./styles";

export const SelectListFilter: React.FC<SelectProps> = ({ id, name, value, listOptions, label, pixels, ...props }) => {
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    const inputRef = useRef<HTMLSelectElement>(null);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return (
        <SelectContainer
            pixels={pixels}
            focus={isFocused}>
            <label
                htmlFor={id}
            >
                {label}
            </label>
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
                {listOptions?.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item.key}
                                    >{
                                    item.value}
                                </option>        
                            )
                        }
                    )
                }
            </select>
        </SelectContainer>
    );
};