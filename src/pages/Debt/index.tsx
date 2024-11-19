import { RegisterContainer } from "components/RegisterContainer"
import { Button, Container, ContainerInputs, ContainerTitle, Input } from "./styles"

export const Debt = () => {

    const listaExemplo = [
        [
            "Nata",
            "Burger King",
            "R$ 23,33"
        ],
        [
            "João",
            "Starbucks",
            "R$ 18,50"
        ],
        [
            "Ana",
            "Subway",
            "R$ 12,90"
        ],
        [
            "Carlos",
            "McDonald's",
            "R$ 27,45"
        ],
        [
            "Maria",
            "Pizza Hut",
            "R$ 35,60"
        ],
        [
            "Pedro",
            "Dominos",
            "R$ 40,20"
        ]
    ];
    

    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
            <ContainerInputs>
                <Input placeholder="Digite o nome aqui..." />
                <Button> + </Button>
                <Button> H </Button>
            </ContainerInputs>
            <RegisterContainer textsList={listaExemplo} />
        </Container>
    )
}