import { Container, ContainerText } from "./styles"
import { RegisterContainerTextProps } from "./types"

export const RegisterContainerTexts = (props: RegisterContainerTextProps) => {
    return (
        <Container>
            <ContainerText> {props.textList[0]} </ContainerText>
            <ContainerText> {props.textList[1]} </ContainerText>
            <ContainerText> {props.textList[2]} </ContainerText>
        </Container>
    )
}