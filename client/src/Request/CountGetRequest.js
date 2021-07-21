import Axios from 'axios';

export function CountRequest(all, medico, enfermeiro, tecnicoEnfermagem, fonoaudiologia, nutricionista, fisioterapeuta){
    Axios.get ('http://localhost:3002/api/countAll').then((response) => {
        all(response.data[0].a)
        })

    Axios.get ('http://localhost:3002/api/countMedico').then((response) => {
        medico(response.data[0].a)
        })

        Axios.get ('http://localhost:3002/api/countEnfermeiro').then((response) => {
        enfermeiro(response.data[0].a)
        })

        Axios.get ('http://localhost:3002/api/countTecnicoEnfermagem').then((response) => {
        tecnicoEnfermagem(response.data[0].a)
        })

        Axios.get ('http://localhost:3002/api/countFonoaudiologia').then((response) => {
        fonoaudiologia(response.data[0].a)
        })
        Axios.get ('http://localhost:3002/api/countNutricionista').then((response) => {
        nutricionista(response.data[0].a)
        })
        Axios.get ('http://localhost:3002/api/countFisioterapeuta').then((response) => {
        fisioterapeuta(response.data[0].a)
        })
}

