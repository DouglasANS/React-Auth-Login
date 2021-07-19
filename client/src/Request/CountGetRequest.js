import Axios from 'axios';

export function CountRequest(medico, enfermeiro, tecnicoEnfermagem, fonoaudiologia){
    Axios.get ('http://localhost:3002/api/countMedico').then((response) => {
        console.log('ima1: ', response.data[0].a)
        medico(response.data[0].a)
        //setMedico(response.data)
        })

        Axios.get ('http://localhost:3002/api/countEnfermeiro').then((response) => {
        console.log('ima2: ', response.data[0].a)
        enfermeiro(response.data[0].a)
        //setEnfermeiro(response.data)
        })

        Axios.get ('http://localhost:3002/api/countTecnicoEnfermagem').then((response) => {
        console.log('ima3: ', response.data[0].a)
        tecnicoEnfermagem(response.data[0].a)
        //setTecnicoEnfermagem(response.data)
        })

        Axios.get ('http://localhost:3002/api/countFonoaudiologia').then((response) => {
        console.log('ima4: ', response.data[0].a)
        fonoaudiologia(response.data[0].a)
        //setFonoaudiologia(response.data)
        })
}

