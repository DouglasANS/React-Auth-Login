import React, { useEffect  } from 'react'
import DashBoardComponent from '../components/DashboardComponent'
import { Redirect  } from "react-router-dom";
import { getToken } from '../context/tokenService';

export default function DashBoard(){

    useEffect(() => {
        console.log('dashbiard')
        var token = getToken('token')
      });

      if(token)

    return(
        <div>
            { false ? 
            (
            <DashBoardComponent />
            ) : (
            <Redirect to='/'  />
            )}
        </div>
    )
}