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
        color: ${theme.COLORS.PRIMARY_MAIN};
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

export const ContainerButtons = styled.div`
    display: flex;
    
    width: 100%;

    justify-content: flex-end;

    gap: 10px;

`