import { MenuProps } from "./types"

import DebtIcon from "assets/img/debtIcon.svg"
import CreditIcon from "assets/img/creditIcon.svg"

import { Container, Icon, IconContainerLeft, IconContainerRight } from "./styles"

export const Menu = (props: MenuProps) => {
    return (
        <Container type={props.type}>
            <IconContainerLeft>
                <Icon src={CreditIcon} />
            </IconContainerLeft>
            <IconContainerRight>
                <Icon src={DebtIcon} />
            </IconContainerRight>
        </Container>
    )
}