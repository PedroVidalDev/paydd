import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "components/Input";
import { Button } from "components/Button";
import { RegisterContainer } from "components/RegisterContainer"

import { Container, ContainerInputs, ContainerTitle } from "./styles"
import { DebtCompleteData } from "dto/DebtDTO";
import { CreditCompleteData } from "dto/CreditDTO";

export const Credit = () => {

    const [creditList, setCreditList] = useState<CreditCompleteData[]>([]);

    const getAllCredits = () => {
        let storedCreditList = localStorage.getItem('creditList');

        if (storedCreditList == null) {
            localStorage.setItem('debtList', JSON.stringify([]));
            storedCreditList = '[]';
        }
            
        setCreditList(JSON.parse(storedCreditList));
    }

    const navigate = useNavigate()

    const handleViewCreate = () => {
        navigate('/credit/new')
    }

    useEffect(() => {
        getAllCredits()
    }, [])

    return (
        <Container>
            <ContainerTitle> Créditos </ContainerTitle>
            <ContainerInputs>
                <Input hasError={false} placeholder="Digite o nome aqui..." />
                <Button onClick={handleViewCreate} text="+" height={40} width={40}/>
                <Button text="H" height={40} width={40} />
            </ContainerInputs>
            <RegisterContainer textsList={creditList as CreditCompleteData[]} />
        </Container>
    )
}