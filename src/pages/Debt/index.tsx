import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

import { Input } from "components/Input";
import { Button } from "components/Button";
import { RegisterContainer } from "components/RegisterContainer"

import { REGEX } from "constants/regex";
import { SearchFilterData } from "./types";
import { DebtCompleteData } from "dto/DebtDTO";
import { Container, ContainerInputs, ContainerTitle } from "./styles"
import { useDebt } from "hooks/useDebt";

export const Debt = () => {

    const { fetchGetPaidDebts, fetchGetUnpaidDebts, fetchGetUnpaidDebtsByName } = useDebt()

    const [debtList, setDebtList] = useState<DebtCompleteData[]>([]);
    
    const navigate = useNavigate()

    const { control, watch, formState: {errors} } = useForm<SearchFilterData>({
        defaultValues: {
            name: ''
        }
    })

    const watchName = watch('name');

    const getAllDebts = useCallback(() => {
        const parsedDebtList = fetchGetUnpaidDebts()

        setDebtList(parsedDebtList)
    }, [])

    const getAllDebtsFiltered = useCallback(() => {
        const filteredDebtList = fetchGetUnpaidDebtsByName(watchName)

        setDebtList(filteredDebtList);
    }, [watchName])

    const handleViewCreate = () => {
        navigate('/debt/new')
    }

    useEffect(() => {
        if(watchName) {
            getAllDebtsFiltered()
        } else {
            getAllDebts()
        }
    }, [watchName, getAllDebtsFiltered, getAllDebts])

    useEffect(() => {
        getAllDebts()
    }, [])

    return (
        <Container>
            <ContainerTitle> Débitos </ContainerTitle>
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
            <RegisterContainer textsList={debtList as DebtCompleteData[]} />
        </Container>
    )
}