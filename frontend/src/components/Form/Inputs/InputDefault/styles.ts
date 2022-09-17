import styled from "styled-components";

interface InputCssProps {
    percent?: string;
    focus?: boolean | any;
    pixels?: string;
}

export const InputContainer = styled.div<InputCssProps>`
    border-radius: 5px;
    width: ${({ pixels }) => (`${pixels}px` ? `${pixels}px` : '100%')};

    > input {
        width: 95%;
        padding: 15px;
        margin: 10px auto;
        border-radius: 5px;
        border: ${({ focus }) => (focus ? '2px solid blue' : '2px solid gray')};
    }

    > label {
        font-size: 12px;
        color: gray;
    }

    span {
        font-size: 12px;
        padding: 3px;
        color: red;
        display: none;
    }
`;