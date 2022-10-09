import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage.jsx'
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage.jsx";
import LotofacilPage from "../pages/LotofacilPage/LotofacilPage.js";
import QuinaPage from "../pages/QuinaPage/QuinaPage.js";
import LotomaniaPage from "../pages/LotomaniaPage/LotomaniaPage.js";
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage.js";
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage.js";
export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element = {<HomePage/>} />
            <Route path= "*" element = {<ErrorPage/>} />
            <Route path= "megasena" element = {<MegaSenaPage/>} />
            <Route path= "quina" element = {<QuinaPage/>} />
            <Route path= "lotofacil" element = {<LotofacilPage/>} />
            <Route path= "lotomania" element = {<LotomaniaPage/>} />
            <Route path= "timemania" element = {<TimemaniaPage/>} />
            <Route path= "diaDeSorte" element = {<DiaDeSortePage/>} />
        </Routes>
      </BrowserRouter>
    )
}

// 'mega-sena', 
//     'quina', 
//     'lotofácil', 
//     'lotomania', 
//     'timemania', 
//     'dia de sorte'