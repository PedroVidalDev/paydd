import { CreditCompleteData } from "dto/CreditDTO";
import { CreateCreditFormData } from "pages/CreditCreate/types";
import { useNavigate } from "react-router";

export const useCredit = () => {

    const navigate = useNavigate()

    const fetchCreateCredit = (data: CreateCreditFormData) => {
        const actualCreditStorage = localStorage.getItem('creditList')

        if (actualCreditStorage == null) {
            localStorage.setItem('creditList', JSON.stringify([data]))
        } else {
            const jsonActualDebtStorage = JSON.parse(actualCreditStorage)
            jsonActualDebtStorage.push(data)
            localStorage.setItem('creditList', JSON.stringify(jsonActualDebtStorage))
        }

        navigate('/credit')
    }

    const fetchGetCredits = () => {
        let storedCreditList = localStorage.getItem('creditList');

        if (storedCreditList == null) {
            localStorage.setItem('debtList', JSON.stringify([]));
            storedCreditList = '[]';
        }

        return JSON.parse(storedCreditList) as CreditCompleteData[];
    }

    return {
        fetchCreateCredit,
        fetchGetCredits
    }
}