import React, { useEffect, useState  } from 'react'
import DashBoardComponent from '../components/DashboardComponent'
import { Redirect  } from "react-router-dom";
import Axios from 'axios';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export default function DashBoard(){

  const [validation, setvalidation] = useState(false)

    const token = window.localStorage.getItem('token')

      function checkLogin(email){
            Axios.post ('http://localhost:3002/api/checkEmail',{
            userEmail: email,
        }).then((response) => {
            if(response.data.message){
              //Usuário Não encontrado
              console.log('Estou em dasboard1')
            }else{          
              //Usuário encontrado 
              console.log('Estou em dasboard2 aqui?')
              
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
              <div>
                <HeaderComponent />
                <DashBoardComponent /> 
                <FooterComponent />
              </div>
              
            ) : (
            <Redirect to='/'  />
            )}
        </div>
    )
}