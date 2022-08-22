import React, { useState } from "react";
import { Container } from "./styles";

export const Select: React.FC = () => {
    const [ value, setValue ] = useState<any>('');

    const handleChange = (target: any) => {
        console.log(target);
        setValue(target);
    }

    return (
        <Container>
            <select id="1" onChange={({target}) => handleChange(target.value)} value={value}>
                <option value="" disabled >Selecione</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <p>{value}</p>
        </Container>
    );
}