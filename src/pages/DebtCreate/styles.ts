import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    flex: 1;

    padding: 20px;
    gap: 20px;

    align-items: center;

    background-color: ${({theme}) => theme.COLORS.NEUTRAL};
`

export const ContainerTitle = styled.h1`
    ${({theme}) => css`
        color: ${theme.COLORS.SECUNDARY_MAIN};
        font-weight: ${theme.FONT_WEIGHT.BOLDER};
        font-size: ${theme.FONT_SIZE.XLARGE}px;
    `}
    text-align: center;
`

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 10px;
`

export const Button = styled.button`
    min-width: 40px;
    min-height: 100%;

    border-radius: 10px;
    border: 0;

    ${({theme}) => css`
        font-weight: ${theme.FONT_WEIGHT.BOLD};
        font-size: ${theme.FONT_SIZE.NORMAL}px;
    `}

    cursor: pointer;

    transition: 0.5s;

    &:hover{
        ${({theme}) => css`
            color: ${theme.COLORS.SECUNDARY_LIGHT};
        `}
    }
`