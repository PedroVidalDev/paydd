import styled, { css } from "styled-components";

interface ContainerProps {
    width: number
    height: number
}

export const Container = styled.button<ContainerProps>`
    width: ${({width}) => width === 0 ? `100%` : `${width}px`};
    height: ${({height}) => height === 0 ? `100%` : `${height}px`};

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
            background-color: ${theme.COLORS.SECUNDARY_LIGHT};
            transform: scale(105%);
        `}
    }
`