import { useNavigate } from "react-router";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Input } from "components/Input";
import { Button } from "components/Button";
import { RegisterContainer } from "components/RegisterContainer"

import { REGEX } from "constants/regex";
import { CreditCompleteData } from "dto/CreditDTO";

import { SearchFilterData } from "./types";
import { Container, ContainerInputs, ContainerTitle } from "./styles"
import { get } from "http";

export const Credit = () => {

    const [creditList, setCreditList] = useState<CreditCompleteData[]>([]);
    
    const { control, watch, formState: {errors} } = useForm<SearchFilterData>({
        defaultValues: {
            name: ''
        }
    })
    
    const navigate = useNavigate()

    const watchName = watch('name');
    
    const getAllCredits = () => {
        let storedCreditList = localStorage.getItem('creditList');

        if (storedCreditList == null) {
            localStorage.setItem('debtList', JSON.stringify([]));
            storedCreditList = '[]';
        }
            
        setCreditList(JSON.parse(storedCreditList));
    }

    const getAllCreditsFiltered = useCallback(() => {
        let storedCreditList = localStorage.getItem('creditList');

        if (storedCreditList == null) {
            localStorage.setItem('creditList', JSON.stringify([]));
            storedCreditList = '[]';
        }

        const parsedCreditList = JSON.parse(storedCreditList) as CreditCompleteData[];
        const filteredCreditList = parsedCreditList.filter(credit => credit.name.includes(watchName));

        setCreditList(filteredCreditList);
    }, [watchName])

    const handleViewCreate = () => {
        navigate('/credit/new')
    }

    useEffect(() => {
        if(watchName) {
            getAllCreditsFiltered()
        } else {
            getAllCredits()
        }
    }, [watchName, getAllCreditsFiltered, getAllCredits])

    useEffect(() => {
        getAllCredits()
    }, [])

    return (
        <Container>
            <ContainerTitle> Créditos </ContainerTitle>
            <ContainerInputs>
                <Controller 
                    control={control}
                    name="name"
                    rules={{
                        required: "Campo necessário",    
                        pattern: {
                            value: REGEX.onlyString,
                            message: "Campo deve ser um texto"
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            hasError={!!errors?.name}
                            errorMessage={errors?.name?.message}
                            onChange={onChange}
                            value={value}
                            placeholder="Digite o nome aqui..."
                        />
                    )}
                />
                <Button onClick={handleViewCreate} text="+" height={40} width={40}/>
                <Button text="H" height={40} width={40} />
            </ContainerInputs>
            <RegisterContainer textsList={creditList as CreditCompleteData[]} />
        </Container>
    )
}