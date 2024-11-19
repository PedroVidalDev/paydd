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
        
        display: flex;
        flex-direction: column;
        
        width: 100%;
        height: 100vh;
    }
`