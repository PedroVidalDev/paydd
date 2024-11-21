import { Container, ErrorMessage, InputField } from "./styles"
import { InputProps } from "./types"

export const Input = (props: InputProps) => {

    const {
        placeholder,
        errorMessage,
        hasError,
        ...rest
    } = props
    
    return (
        <Container>
            <InputField 
                {...rest}
                hasError={hasError}
                placeholder={placeholder} 
            />
            
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
    )
}