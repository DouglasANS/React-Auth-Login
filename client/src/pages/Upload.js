export default function Upload(){


    return(
    <div>   
        <h1>Form de upload</h1>
        <form method='post' encType='multipart/form-data' action='http://localhost:3002/upload'>
        <input type='file' name='file' />
        <input type='submit' value='upload' />
        </form>
        
     </div>
    )
}