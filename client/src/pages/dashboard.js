import React, { useEffect, useState  } from 'react'
import DashBoardComponent from '../components/DashboardComponent'
import { Redirect  } from "react-router-dom";
import Axios from 'axios';

export default function DashBoard(){

    const [valor1, setvalor1] = useState(false)
    const token = window.localStorage.getItem('token')

      function checkLogin(email){
            Axios.post ('http://localhost:3002/api/checkEmail',{
            userEmail: email,
        }).then((response) => {
            if(response.data.message){
              //Não encontrado
              console.log('Estou em dasboard1')
            }else{          
              //Usuário encontrado 
              setvalor1(true)
              console.log('Estou em dasboard2 aqui?')
              console.log('valor1:  ' +valor1)
            }
        })
      }

      useEffect(() => {
        checkLogin(token)
       
      },);

    return(
        <div>
            { true ? 
            (
            <DashBoardComponent />
            ) : (
            <Redirect to='/'  />
            )}
        </div>
    )
}