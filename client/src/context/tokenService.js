export function saveToken(token){
    window.localStorage.setItem('token', token)
  }

  export  function getToken(){
    window.localStorage.getItem('token')
  }
