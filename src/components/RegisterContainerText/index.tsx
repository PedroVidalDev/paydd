import { Button } from "components/Button"
import { useMenu } from "contexts/MenuContext"

import { RegisterContainerTextProps } from "./types"

import { Container, ContainerText } from "./styles"
import { MenuType } from "components/Menu/types"
import { CreditCompleteData } from "dto/CreditDTO"
import { DebtCompleteData } from "dto/DebtDTO"

export const RegisterContainerTexts = (props: RegisterContainerTextProps) => {

    const { type, setType } = useMenu()

    const handleLinePaid = () => {
        let listParse;

        if(type === MenuType.CREDIT) {
            const creditList = localStorage.getItem('creditList')
            if(creditList) {
                listParse = JSON.parse(creditList) as CreditCompleteData[]
            }
        } else {
            const debtList = localStorage.getItem('debtList')
            if(debtList) {
                listParse = JSON.parse(debtList) as DebtCompleteData[]
            }
        }

        if(listParse) {
            const newList = listParse.map(item => item.name !== props.textList.name ? item : {...item, paid: true})
            localStorage.setItem(
                type === MenuType.CREDIT ? 'creditList' : 'debtList', 
                JSON.stringify(newList)
            )
        }

        window.location.reload()
    }

    return (
        <Container>
            <ContainerText> {props.textList.name} </ContainerText>
            <ContainerText> {props.textList.reason} </ContainerText>
            <ContainerText> R$ {props.textList.price} </ContainerText>
            {
                props.textList.paid ? 
                <ContainerText>Pago</ContainerText> :
                <ContainerText>
                    <Button text="Pagar" height={40} width={130} onClick={handleLinePaid}/>
                </ContainerText> 
                
            }
        </Container>
    )
}