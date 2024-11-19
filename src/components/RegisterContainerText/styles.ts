import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    justify-content: space-between;

    padding-bottom: 10px;
    
    border-bottom: 1px solid black;
`

export const ContainerText = styled.p`
    font-size: ${({theme}) => theme.FONT_SIZE.NORMAL}px;
`