import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 70px;

    border-radius: 15px 15px 0 0;

    background-color: ${({theme}) => theme.COLORS.SECUNDARY_DARK};
`

export const IconContainerLeft = styled.div`
    display: flex;

    flex: 1;
    height: 100%;

    border-radius: 15px 0 0 0;

    transition: 0.5s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.PRIMARY_LIGHT};
    }
`

export const IconContainerRight = styled.div`
    display: flex;

    flex: 1;
    height: 100%;

    border-radius: 0 15px 0 0;

    transition: 0.5s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.SECUNDARY_LIGHT};
    }
`