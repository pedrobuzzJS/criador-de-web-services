import styled from 'styled-components';

interface InputCssProps {
    percent?: string;
    focus?: boolean | any;
    pixels?: number;
}

export const SelectContainer = styled.div<InputCssProps>`
    border-radius: 5px;
    width: ${({ pixels }) => (pixels ? pixels : '100%')};

    > Select {
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
`;