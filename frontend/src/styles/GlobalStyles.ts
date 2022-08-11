import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, border-style, #root {
        height: 100%;
        background-color: #eee;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    :root {
        --primary: #36393f,

        --white: #fff,

        --link: #5d80d6,
    }
`;