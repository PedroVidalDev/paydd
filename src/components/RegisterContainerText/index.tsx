import { Container, ContainerText } from "./styles"
import { RegisterContainerTextProps } from "./types"

export const RegisterContainerTexts = (props: RegisterContainerTextProps) => {
    return (
        <Container>
            <ContainerText> {props.textList.name} </ContainerText>
            <ContainerText> {props.textList.reason} </ContainerText>
            <ContainerText> R$ {props.textList.price} </ContainerText>
        </Container>
    )
}