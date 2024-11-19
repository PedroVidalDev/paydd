import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    justify-content: space-between;
`

export const ContainerText = styled.p`
    font-size: ${({theme}) => theme.FONT_SIZE.NORMAL}px;
`