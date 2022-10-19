import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import HistoryPage from "../pages/HistoryPage/HistoryPage.jsx";
import TestePage from "../pages/TestePage/TestePage.jsx";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "/history" element = {<HistoryPage/>} />
            <Route path= ":user" element = {<TestePage/>} />
        </Routes>
      </BrowserRouter>
    )
}