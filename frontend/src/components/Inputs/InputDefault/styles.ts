import styled, { css } from "styled-components";

interface InputWidthSize {
    percent?: string
}

export const InputContainer = styled.div<InputWidthSize>`
    border: 3px solid darkblue;
    border-radius: 10%;
    width: ${({ percent }) => (percent ? percent : '')};
    /* width: ''; */

    > input {
        width: ${({ percent }) => (percent ? percent : '')};
    }

`;