import { RegisterContainerTexts } from "components/RegisterContainerText"
import { RegisterContainerProps } from "./types"
import { Container } from "./styles"

export const RegisterContainer = (props: RegisterContainerProps) => {
    return (
        <Container>
            {
                props.textsList.map((texts) => (
                    <RegisterContainerTexts textList={texts} />
                ))
            }
        </Container>
    )
}