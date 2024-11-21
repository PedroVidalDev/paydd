import { Button } from "components/Button";
import { Container, ContainerButtons, ContainerInputs, ContainerTitle } from "./styles"
import { Input } from "components/Input";
import { useNavigate } from "react-router";

export const DebtCreate = () => {

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate('/debt')
    }

    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
            <ContainerInputs>
                <Input placeholder="Digite o nome aqui..." />
                <Input placeholder="Digite o motivo aqui..." />
                <Input placeholder="Digite o preço aqui..." />
            </ContainerInputs>
            <ContainerButtons>
                <Button onClick={handleCancel} text="Cancelar" height={50} width={140} />
                <Button onClick={handleCancel} text="Salvar" height={50} width={140} />
            </ContainerButtons>
        </Container>
    )
}