import { RegisterContainer } from "components/RegisterContainer"
import { Container, ContainerInputs, ContainerTitle, CreateButton, Input } from "./styles"

export const Debt = () => {

    const listaExemplo = [
        [
            "Nata",
            "blowjob",
            "R$ 23,33"
        ]
    ]

    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
            <ContainerInputs>
                <Input placeholder="Digite o nome aqui..." />
                <CreateButton> + </CreateButton>
            </ContainerInputs>
            <RegisterContainer textsList={listaExemplo} />
        </Container>
    )
}