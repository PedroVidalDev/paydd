import styled, { css } from "styled-components";

export const Container = styled.div`
    flex: 1;

    padding: 20px;

    align-items: center;

    background-color: ${({theme}) => theme.COLORS.SECUNDARY_LIGHT};
`

export const ContainerTitle = styled.h1`
    ${({theme}) => css`
        color: ${theme.COLORS.SECUNDARY_MAIN};
        font-weight: ${theme.FONT_WEIGHT.BOLDER};
        font-size: ${theme.FONT_SIZE.XLARGE}px;
    `}
    text-shadow: 0px 0px 5px black;
    text-align: center;
`