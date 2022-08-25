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

// input{
//     padding: 15px;
//     margin: 10px 0px;
//     border-radius: 5px;
//     border: 1px solid gray;
// }


// label{
//     font-size: 12px;
//     color: gray;
// }

// span{
//     font-size: 12px;
//     padding: 3px;
//     color: red;
//     display: none;
// }

// input:invalid[focused="true"]{
//     border: 1px solid red;
// }

// input:invalid[focused="true"] ~ span{
//     display: block;
// }