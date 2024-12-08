import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

import { Input } from "components/Input";
import { Button } from "components/Button";
import { RegisterContainer } from "components/RegisterContainer"

import { useDebt } from "hooks/useDebt";
import { REGEX } from "constants/regex";
import { SearchFilterData } from "./types";
import { DebtCompleteData } from "dto/DebtDTO";
import { Container, ContainerInputs, ContainerTitle } from "./styles"

export const Debt = () => {

    const { fetchGetPaidDebts, fetchGetUnpaidDebts, fetchGetDebtsByName } = useDebt()

    const [debtList, setDebtList] = useState<DebtCompleteData[]>([])

    const [debtPaidState, setDebtPaidState] = useState<boolean>(false)
    
    const navigate = useNavigate()

    const { t } = useTranslation()

    const { control, watch, formState: {errors} } = useForm<SearchFilterData>({
        defaultValues: {
            name: ''
        }
    })

    const watchName = watch('name');

    const getAllDebts = () => {
        const parsedDebtList = debtPaidState ? fetchGetPaidDebts() : fetchGetUnpaidDebts()
        console.log(parsedDebtList)

        setDebtList(parsedDebtList)
    }

    const getAllDebtsFiltered = useCallback(() => {
        const filteredDebtList = fetchGetDebtsByName(watchName)

        setDebtList(filteredDebtList);
    }, [watchName])

    const handleChangeDebtPaidState = () => {
        setDebtPaidState(!debtPaidState)
    }

    const handleViewCreate = () => {
        navigate('/debt/new')
    }

    useEffect(() => {
        if(watchName) {
            getAllDebtsFiltered()
        } else {
            getAllDebts()
        }
    }, [watchName, getAllDebtsFiltered, getAllDebts, debtPaidState])

    useEffect(() => {
        getAllDebts()
    }, [])

    return (
        <Container>
            <ContainerTitle> {t('title.debt')} </ContainerTitle>
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
                <Button onClick={handleChangeDebtPaidState} text={debtPaidState ? "P" : "H"} height={40} width={40} />
            </ContainerInputs>
            <RegisterContainer textsList={debtList as DebtCompleteData[]} />
        </Container>
    )
}