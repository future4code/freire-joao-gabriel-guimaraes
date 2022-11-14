import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import HistoryPage from "../pages/HistoryPage/HistoryPage.jsx";
import UserPage from "../pages/UserPage/UserPage.jsx";
import ReposPage from "../pages/ReposPage/ReposPage.jsx";

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "/history" element = {<HistoryPage/>} />
            <Route path= ":user" element = {<UserPage/>} />
            <Route path= ":user/repos" element = {<ReposPage/>} />
        </Routes>
      </BrowserRouter>
    )
}