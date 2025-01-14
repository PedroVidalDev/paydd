import styled from "styled-components";

import { MenuProps, MenuType } from "./types";
import { NavLink } from "react-router-dom";

export const Container = styled.div<MenuProps>`
    display: flex;

    width: 100%;
    height: 70px;

    border-radius: 15px 15px 0 0;

    background-color: ${({theme, type}) => type === MenuType.DEBT ? theme.COLORS.SECUNDARY_DARK : theme.COLORS.PRIMARY_DARK};

    transition: 0.5s;
`

export const IconContainerLeft = styled(NavLink)`
    display: flex;

    flex: 1;
    height: 100%;

    border-radius: 15px 0 0 0;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.5s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.PRIMARY_LIGHT};
    }
`

export const IconContainerRight = styled(NavLink)`
    display: flex;

    flex: 1;
    height: 100%;

    border-radius: 0 15px 0 0;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: 0.5s;

    &:hover{
        background-color: ${({theme}) => theme.COLORS.SECUNDARY_LIGHT};
    }
`

export const Icon = styled.img`
    width: 40px;
    height: 50px;
`