import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"


const AppRoutesComponent: FC = () => {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route  element={<App />}>
                        <Route index={true} path="/" element={<>lore</>} />
                        <Route path="signup" element={<>sign Up</>} />
                        <Route path="signin" element={<>Sign In</>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export { AppRoutesComponent }