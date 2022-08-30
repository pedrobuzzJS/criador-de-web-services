import styled from "styled-components";

interface InputCssProps {
    percent?: string;
    focus?: boolean | any;
    pixels?: string;
}

export const InputContainer = styled.div<InputCssProps>`
    /* border: 1px solid blue; */
    border-radius: 5px;
    /* width: 250px; */
    /* width: ${({ percent }) => (percent ? percent : '')}; */
    width: ${({ pixels }) => (pixels ? pixels : '100%')};

    > input {
        width: 95%;
        padding: 15px;
        margin: 10px auto;
        border-radius: 5px;
        border: ${({ focus }) => (focus ? '1px solid tomato' : '1px solid gray')};
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

export const AnimatedContainer = styled.div<InputCssProps>`
    border-radius: 5px;
    width: ${({ pixels }) => (pixels ? pixels : '100%')};
    /* position: relative; */

    > input {
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid dark;
        border-radius: 5px;
        font-family: inherit;
        font-size: inherit;
        color: white;
        outline: none;
        padding: 1.25rem;
        background: none;

        &:hover {
            border-color: darkblue;
        }

        &:focus {
          border-color: tomato;
        }
    }

    > label {
        /* position: absolute; */
        left: 1rem;
        top: 0.8rem;
        padding: 0 0.5rem;
        color: white;
        cursor: text;
        transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
        background-color: none;
    }
`;