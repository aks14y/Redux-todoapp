import {useState} from 'react'

function useAuth(initialValue) {
  const[isAuth,setISAuth]=useState(initialValue);

  function login() {
    setTimeout(() => {
      setISAuth(true);

    },1000)
  }

  function logout() {
    setTimeout(() => {
      setISAuth(false);

    },1000)
  }


  return[isAuth,login,logout];
  
}

export default useAuth
