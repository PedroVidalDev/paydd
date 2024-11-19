import { RegisterContainer } from "components/RegisterContainer"
import { Button, Container, ContainerInputs, ContainerTitle } from "./styles"
import { Input } from "components/Input";
import { useNavigate } from "react-router";

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

    const navigate = useNavigate()

    const handleViewCreate = () => {
        navigate('/debt/new')
    }
    

    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
            <ContainerInputs>
                <Input placeholder="Digite o nome aqui..." />
                <Button onClick={handleViewCreate}> + </Button>
                <Button> H </Button>
            </ContainerInputs>
            <RegisterContainer textsList={listaExemplo} />
        </Container>
    )
}