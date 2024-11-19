import { Container } from "./styles"
import { InputProps } from "./types"

export const Input = (props: InputProps) => {
    return <Container placeholder={props.placeholder} />
}