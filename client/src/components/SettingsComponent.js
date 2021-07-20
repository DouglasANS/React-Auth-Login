import Axios from 'axios';
import {  useEffect, useState } from 'react';

export default function SettingsComponent(){
    const [dataCurrentUser, setDatacurrentUser] = useState([])
    
    useEffect(()=>{
        const token = window.localStorage.getItem('currentEmail')
        Axios.get (`http://localhost:3002/api/SelectUserLogin/${token}`).then((response) => {
        setDatacurrentUser(response.data[0])
        })  
     },[])
     
     console.log('datasssa1: ', dataCurrentUser)
    return(
        <>
            <div >
                <h1>SettingsComponent {dataCurrentUser.id}</h1>
                <button >teste</button>
            </div>
        
        </>
    )
}