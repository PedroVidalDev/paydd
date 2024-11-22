import { MenuType } from "./types"

import DebtIcon from "assets/img/debtIcon.svg"
import CreditIcon from "assets/img/creditIcon.svg"

import { Container, Icon, IconContainerLeft, IconContainerRight } from "./styles"
import { useEffect, useState } from "react"

export const Menu = () => {
    const [type, setType] = useState<MenuType>(MenuType.DEBT);

    const handleTypeChange = (newType: MenuType) => {
        console.log(newType)
        setType(newType)
    }

    useEffect(() => {
        console.log('Type changed:', type);
      }, [type]);

    return (
        <Container type={type as MenuType}>
            <IconContainerLeft onClick={() => handleTypeChange(MenuType.CREDIT)}>
                <Icon src={CreditIcon} />
            </IconContainerLeft>
            <IconContainerRight onClick={() => handleTypeChange(MenuType.DEBT)}>
                <Icon src={DebtIcon} />
            </IconContainerRight>
        </Container>
    )
}