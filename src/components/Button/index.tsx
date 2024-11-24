import { useMenu } from "contexts/MenuContext";
import { Container } from "./styles"
import { ButtonProps } from "./types"

export const Button = (props: ButtonProps) => {

    const { type, setType } = useMenu();

    return (
        <Container 
            width={props.width ? props.width : 0} 
            height={props.height ? props.height : 0}
            onClick={props.onClick}
            type={type as 'debt' | 'credit' | 'neutral'}
        > 
            {props.text} 
        </Container>
    )
}