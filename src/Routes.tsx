import { Debt } from "pages/Debt"
import { DebtCreate } from "pages/DebtCreate"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/debt"
                    element={
                        <Debt />
                    }
                />

                <Route 
                    path="/debt/new"
                    element={
                        <DebtCreate />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}