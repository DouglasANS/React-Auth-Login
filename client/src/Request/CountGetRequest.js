import Axios from 'axios';

export function CountRequest(){
    Axios.get ('http://localhost:3002/api/countMedico').then((response) => {
        console.log(response.data)
        //setMedico(response.data)
        })

        Axios.get ('http://localhost:3002/api/countEnfermeiro').then((response) => {
        console.log(response.data)
        //setEnfermeiro(response.data)
        })

        Axios.get ('http://localhost:3002/api/countTecnicoEnfermagem').then((response) => {
        console.log(response.data)
        //setTecnicoEnfermagem(response.data)
        })

        Axios.get ('http://localhost:3002/api/countFonoaudiologia').then((response) => {
        console.log(response.data)
        //setFonoaudiologia(response.data)
        })
}