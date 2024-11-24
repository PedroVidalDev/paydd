import { MenuType } from "./types"

import DebtIcon from "assets/img/debtIcon.svg"
import CreditIcon from "assets/img/creditIcon.svg"

import { Container, Icon, IconContainerLeft, IconContainerRight } from "./styles"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useMenu } from "contexts/MenuContext"

export const Menu = () => {

    const navigate = useNavigate()

    const {type, setType} = useMenu();

    const handleTypeChange = (newType: MenuType) => {
        setType(newType)
    }

    useEffect(() => {
        type === MenuType.DEBT ? navigate('/debt') : navigate('/credit')
    }, [type])

    return (
        <Container type={type as MenuType}>
            <IconContainerRight to={'/debt'} onClick={() => handleTypeChange(MenuType.DEBT)}>
                <Icon src={DebtIcon} />
            </IconContainerRight>

            <IconContainerLeft to={'/credit'} onClick={() => handleTypeChange(MenuType.CREDIT)}>
                <Icon src={CreditIcon} />
            </IconContainerLeft>
        </Container>
    )
}