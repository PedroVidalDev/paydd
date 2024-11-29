import { useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";

import { Input } from "components/Input";
import { Button } from "components/Button";

import { CreateDebtFormData } from "./types";

import { REGEX } from "constants/regex";

import { Container, ContainerButtons, ContainerInputs, ContainerTitle } from "./styles"

export const DebtCreate = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: {errors} } = useForm<CreateDebtFormData>({
        defaultValues: {
            name: '',
            price: '',
            reason: '',
            paid: false
        }
    })

    const handleCancel = () => {
        navigate('/debt')
    }

    const onSubmit = (data: CreateDebtFormData) => {
        const actualDebtStorage = localStorage.getItem('debtList');

        if (actualDebtStorage == null) {
            localStorage.setItem('debtList', JSON.stringify([data]));
        } else {
            const jsonActualDebtStorage = JSON.parse(actualDebtStorage);
            jsonActualDebtStorage.push(data);
            localStorage.setItem('debtList', JSON.stringify(jsonActualDebtStorage));
        }

        navigate('/debt')
    }

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
                            onChange={onChange}
                            value={value}
                            hasError={!!errors?.name}
                            errorMessage={errors?.name?.message}
                            placeholder="Digite o nome aqui..." 
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="reason"
                    rules={{
                        required: "Campo necessário",    
                        pattern: {
                            value: REGEX.onlyString,
                            message: "Campo deve ser um texto"
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            hasError={!!errors?.reason}
                            onChange={onChange}
                            value={value}
                            errorMessage={errors?.reason?.message}
                            placeholder="Digite o motivo aqui..." 
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="price"
                    rules={{
                        required: "Campo necessário",    
                        pattern: {
                            value: REGEX.onlyNumbers,
                            message: "Campo deve ser um número"
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            hasError={!!errors?.price}
                            onChange={onChange}
                            value={value}
                            errorMessage={errors?.price?.message}
                            placeholder="Digite o preço aqui..." 
                        />
                    )}
                />
            </ContainerInputs>
            <ContainerButtons>
                <Button onClick={handleCancel} text="Cancelar" height={50} width={140} />
                <Button onClick={handleSubmit(onSubmit)} text="Salvar" height={50} width={140} />
            </ContainerButtons>
        </Container>
    )
}