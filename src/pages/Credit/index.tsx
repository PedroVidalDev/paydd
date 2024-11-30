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
import { useCredit } from "hooks/useCredit";

export const Credit = () => {

    const { fetchGetPaidCredits, fetchGetUnpaidCredits, fetchGetUnpaidCreditsByName } = useCredit()

    const [creditList, setCreditList] = useState<CreditCompleteData[]>([]);
    
    const { control, watch, formState: {errors} } = useForm<SearchFilterData>({
        defaultValues: {
            name: ''
        }
    })
    
    const navigate = useNavigate()

    const watchName = watch('name');
    
    const getAllCredits = () => {
        const parsedCreditList = fetchGetUnpaidCredits()
        setCreditList(parsedCreditList);
    }

    const getAllCreditsFiltered = useCallback(() => {
        const filteredCreditList = fetchGetUnpaidCreditsByName(watchName)

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