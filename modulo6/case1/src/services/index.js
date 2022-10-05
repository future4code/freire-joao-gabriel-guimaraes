import axios from 'axios'
import {BASE_URL} from '../constants/BASE_URL.js'
import { useEffect, useState } from 'react';
export const Nome = () => {
    const [nome, setNome] = useState([])
    axios
        .get(`${BASE_URL}/arcano1.jpg`)
        .then((response) => {
            setNome(response)
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
        });
    return nome
};


// const fs = require("fs")

// export function readFileJson(file) {
//     try {
//         let content = fs.readFileSync(file, "utf-8");
//         return JSON.parse(content)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const lendoJSon = readFileJson('./content.json')
//     console.log(lendoJSon)