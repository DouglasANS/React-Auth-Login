import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Axios from 'axios';

export default function Pagina2(){
    const auth = useContext(AuthContext)

    const [uploadimg, seruploadimg] = useState('')

    function teste(){
        auth.setLogin('123456')
    }

    function UploadImage(){
        Axios.post('http://localhost:3002/api/imagema', { Img: uploadimg[0]}).then((response) => console.log(response))
       console.log(uploadimg[0])
    }

    return(
        <div>
            <input type='file' onChange={(imagem) => {seruploadimg(imagem.target.files)}} />
            
            <button onClick={UploadImage}>Enviar img</button>
            <button onClick={teste}>setar 123456</button>
        </div>
    )
}