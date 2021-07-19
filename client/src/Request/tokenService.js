export function saveToken(token){
    window.localStorage.setItem('token', token)
  }

export  function getToken(){
    window.localStorage.getItem('token')
  }

export function saveCurrentUser(currentUser){
  window.localStorage.setItem('currentUser', currentUser)
  }

export function saveCurrentEmail(currentEmail){
    window.localStorage.setItem('currentEmail', currentEmail)
  }



