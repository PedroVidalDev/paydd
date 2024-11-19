import { Button, Container, ContainerInputs, ContainerTitle } from "./styles"
import { Input } from "components/Input";

export const Debt = () => {
    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
            <ContainerInputs>
                <Input placeholder="Digite o nome aqui..." />
                <Input placeholder="Digite o motivo aqui..." />
                <Input placeholder="Digite o preço aqui..." />
            </ContainerInputs>
        </Container>
    )
}