import styled, { css } from "styled-components";

interface InputProps {
    hasError: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const InputField = styled.input<InputProps>`
    width: 100%;
    height: 50px;

    border-radius: 10px;
    border: ${({theme, hasError}) => hasError ? `1px solid ${theme.COLORS.SECUNDARY_MAIN}` : '0'};
    
    padding: 15px;
`

export const ErrorMessage = styled.p`
    ${({theme}) => css`
        color: ${theme.COLORS.SECUNDARY_MAIN};
        font-size: ${theme.FONT_SIZE.SMALL}px;
        font-weight: ${theme.FONT_WEIGHT.BOLD};
    `}
`