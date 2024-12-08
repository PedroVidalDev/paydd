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

    const { fetchGetPaidCredits, fetchGetUnpaidCredits, fetchGetCreditsByName } = useCredit()

    const [creditList, setCreditList] = useState<CreditCompleteData[]>([]);

    const [creditPaidState, setCreditPaidState] = useState<boolean>(false);
    
    const { control, watch, formState: {errors} } = useForm<SearchFilterData>({
        defaultValues: {
            name: ''
        }
    })
    
    const navigate = useNavigate()

    const watchName = watch('name');
    
    const getAllCredits = () => {
        const parsedCreditList = creditPaidState ? fetchGetPaidCredits() : fetchGetUnpaidCredits()
        setCreditList(parsedCreditList)
    }

    const getAllCreditsFiltered = useCallback(() => {
        const filteredCreditList = fetchGetCreditsByName(watchName)

        setCreditList(filteredCreditList);
    }, [watchName])

    const handleViewCreate = () => {
        navigate('/credit/new')
    }

    const handleChangeCreditPaidState = () => {
        setCreditPaidState(!creditPaidState)
    }

    useEffect(() => {
        if(watchName) {
            getAllCreditsFiltered()
        } else {
            getAllCredits()
        }
    }, [watchName, getAllCreditsFiltered, getAllCredits, creditPaidState])

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
                <Button onClick={handleChangeCreditPaidState} text={creditPaidState ? "P" : "H"} height={40} width={40} />
            </ContainerInputs>
            <RegisterContainer textsList={creditList as CreditCompleteData[]} />
        </Container>
    )
}