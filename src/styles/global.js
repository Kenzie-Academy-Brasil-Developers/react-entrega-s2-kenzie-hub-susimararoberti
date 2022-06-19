import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --pink-1:#FF577F;
        --pink-2:#FF427F;
        --pink-negative: #59323F;
        --grey-0:#F8F9FA;
        --grey-1:#868E96;
        --grey-2:#343B41;
        --grey-3: #212529;
        --grey-4:#121214;
        --black:#000000;
        --white:#FFFFFF;
        --red: #c53030;
    }

    body{
        background-color: var(--black) !important;
        color: var(--white) ;
    }

    body, input, button, h1, h2, h3, h4, h5, h6, p, span, select, option {
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

`;
