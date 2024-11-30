import { DebtCompleteData } from "dto/DebtDTO";
import { useNavigate } from "react-router";

export const useDebt = () => {

    const navigate = useNavigate()

    const fetchCreateDebt = (data: DebtCompleteData) => {
        const actualDebtStorage = localStorage.getItem('debtList')

        if (actualDebtStorage == null) {
            localStorage.setItem('debtList', JSON.stringify([data]))
        } else {
            const jsonActualDebtStorage = JSON.parse(actualDebtStorage)
            jsonActualDebtStorage.push(data)
            localStorage.setItem('debtList', JSON.stringify(jsonActualDebtStorage));
        }

        navigate('/debt')
    }

    const fetchGetDebts = () => {
        let storedDebtList = localStorage.getItem('debtList');

        if (storedDebtList == null) {
            localStorage.setItem('debtList', JSON.stringify([]));
            storedDebtList = '[]';
        }

        return JSON.parse(storedDebtList) as DebtCompleteData[];
    }

    return {
        fetchCreateDebt,
        fetchGetDebts
    }
}