import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "components/Input";
import { Button } from "components/Button";
import { RegisterContainer } from "components/RegisterContainer"

import { Container, ContainerInputs, ContainerTitle } from "./styles"
import { DebtCompleteData } from "dto/DebtDTO";

export const Debt = () => {

    const [debtList, setDebtList] = useState<DebtCompleteData[]>([]);

    const getAllDebts = () => {
        let storedDebtList = localStorage.getItem('debtList');

        if (storedDebtList == null) {
            localStorage.setItem('debtList', JSON.stringify([]));
            storedDebtList = '[]';
        }
            
        setDebtList(JSON.parse(storedDebtList));
        console.log(debtList)
    }

    const navigate = useNavigate()

    const handleViewCreate = () => {
        navigate('/debt/new')
    }

    useEffect(() => {
        getAllDebts()
    }, [])

    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
            <ContainerInputs>
                <Input hasError={false} placeholder="Digite o nome aqui..." />
                <Button onClick={handleViewCreate} text="+" height={40} width={40}/>
                <Button text="H" height={40} width={40} />
            </ContainerInputs>
            <RegisterContainer textsList={debtList as DebtCompleteData[]} />
        </Container>
    )
}