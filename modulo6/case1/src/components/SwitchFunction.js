import { useNavigate } from "react-router-dom";
import { goToMegasena, goToQuina, goToLotofacil, goToTimemania, goToDiaDeSorte, goToLotomania, goToHomePage } from "../routes/coordinator";

export const SwitchFunction = (nome) => {
    const navigate = useNavigate();
    switch (nome) {
        case nome === nome:
            break;
        
        case "mega-sena":
            return goToMegasena(navigate)
        case "quina":
           return goToQuina(navigate)
        case "lotofácil":
           return goToLotofacil(navigate)
        case "lotomania":
            return goToLotomania(navigate)
        case "timemania":
            return goToTimemania(navigate)
        case "dia de sorte":
            return goToDiaDeSorte(navigate)
      }
}