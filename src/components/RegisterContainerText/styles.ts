import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    justify-content: space-between;

    padding: 10px 10px;
    
    border-bottom: 1px solid black;

    cursor: pointer;

    transition: 0.5s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.NEUTRAL_400};
    }

    &:hover p{
        transform: scale(105%);
    }
`

export const ContainerText = styled.p`
    flex: 1;

    font-size: ${({theme}) => theme.FONT_SIZE.NORMAL}px;

    text-align: center;

    transition: 0.5s;
`