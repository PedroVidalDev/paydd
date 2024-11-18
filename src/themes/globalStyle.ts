import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html{
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    #root{
        position: relative;
        width: 100%;
        min-height: 100vh;
    }
`