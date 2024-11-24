import { CreditCompleteData } from "dto/CreditDTO"
import { DebtCompleteData } from "dto/DebtDTO"

export type RegisterContainerProps = {
    textsList: DebtCompleteData[] | CreditCompleteData[]
}