import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";

import { Input } from "components/Input";
import { Button } from "components/Button";

import { CreateDebtFormData } from "./types";

import { REGEX } from "constants/regex";

import { Container, ContainerButtons, ContainerInputs, ContainerTitle } from "./styles"
import { useDebt } from "hooks/useDebt";

export const DebtCreate = () => {

    const { fetchCreateDebt } = useDebt()

    const navigate = useNavigate()

    const { t } = useTranslation()

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
        fetchCreateDebt(data)
    }

    return (
        <Container>
            <ContainerTitle> {t('title.debt')} </ContainerTitle>
            <ContainerInputs>
                <Controller 
                    control={control}
                    name="name"
                    rules={{
                        required: t("inputErrors.required"),    
                        pattern: {
                            value: REGEX.onlyString,
                            message: t("inputErrors.text")
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            onChange={onChange}
                            value={value}
                            hasError={!!errors?.name}
                            errorMessage={errors?.name?.message}
                            placeholder={t('placeholders.name')}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="reason"
                    rules={{
                        required: t("inputErrors.required"),    
                        pattern: {
                            value: REGEX.onlyString,
                            message: t("inputErrors.text")
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            hasError={!!errors?.reason}
                            onChange={onChange}
                            value={value}
                            errorMessage={errors?.reason?.message}
                            placeholder={t('placeholders.reason')}
                        />
                    )}
                />

                <Controller 
                    control={control}
                    name="price"
                    rules={{
                        required: t("inputErrors.required"),    
                        pattern: {
                            value: REGEX.onlyNumbers,
                            message: t("inputErrors.number")
                        }
                    }}
                    render={({ field: {onChange, value} }) => (
                        <Input
                            hasError={!!errors?.price}
                            onChange={onChange}
                            value={value}
                            errorMessage={errors?.price?.message}
                            placeholder={t('placeholders.price')}
                        />
                    )}
                />
            </ContainerInputs>
            <ContainerButtons>
                <Button onClick={handleCancel} text={t('buttons.cancel')} height={50} width={140} />
                <Button onClick={handleSubmit(onSubmit)} text={t('buttons.save')} height={50} width={140} />
            </ContainerButtons>
        </Container>
    )
}