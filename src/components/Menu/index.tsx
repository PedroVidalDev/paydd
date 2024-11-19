import { Container, IconContainerLeft, IconContainerRight } from "./styles"
import { MenuProps } from "./types"

export const Menu = (props: MenuProps) => {
    return (
        <Container>
            <IconContainerLeft></IconContainerLeft>
            <IconContainerRight></IconContainerRight>
        </Container>
    )
}