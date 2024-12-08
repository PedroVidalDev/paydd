import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

import { Input } from "components/Input";
import { Button } from "components/Button";
import { RegisterContainer } from "components/RegisterContainer"

import { REGEX } from "constants/regex";
import { CreditCompleteData } from "dto/CreditDTO";

import { SearchFilterData } from "./types";
import { useCredit } from "hooks/useCredit";
import { Container, ContainerInputs, ContainerTitle } from "./styles"

export const Credit = () => {

    const { fetchGetPaidCredits, fetchGetUnpaidCredits, fetchGetCreditsByName } = useCredit()

    const [creditList, setCreditList] = useState<CreditCompleteData[]>([])

    const [creditPaidState, setCreditPaidState] = useState<boolean>(false)
    
    const { control, watch, formState: {errors} } = useForm<SearchFilterData>({
        defaultValues: {
            name: ''
        }
    })
    
    const navigate = useNavigate()

    const { t } = useTranslation()

    const watchName = watch('name')
    
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
            <ContainerTitle> {t('title.credit')} </ContainerTitle>
            <ContainerInputs>
                <Controller 
                    control={control}
                    name="name"
                    rules={{
                        required: t('inputErrors.required'),    
                        pattern: {
                            value: REGEX.onlyString,
                            message: t('inputErrors.text')
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            hasError={!!errors?.name}
                            errorMessage={errors?.name?.message}
                            onChange={onChange}
                            value={value}
                            placeholder={t('placeholders.name')}
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