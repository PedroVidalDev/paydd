import { Container } from "./styles"
import { ButtonProps } from "./types"

export const Button = (props: ButtonProps) => {
    return (
        <Container 
            width={props.width ? props.width : 0} 
            height={props.height ? props.height : 0}
            onClick={props.onClick}
        > 
            {props.text} 
        </Container>
    )
}