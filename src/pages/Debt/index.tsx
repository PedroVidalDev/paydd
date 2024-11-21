import { RegisterContainer } from "components/RegisterContainer"
import { Container, ContainerInputs, ContainerTitle } from "./styles"
import { Input } from "components/Input";
import { useNavigate } from "react-router";
import { Button } from "components/Button";

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
                <Input hasError={false} placeholder="Digite o nome aqui..." />
                <Button onClick={handleViewCreate} text="+" height={40} width={40}/>
                <Button text="H" height={40} width={40} />
            </ContainerInputs>
            <RegisterContainer textsList={listaExemplo} />
        </Container>
    )
}