import { useState } from 'react';
import './Login.css'

function Login(){
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg]= useState('');
  const [token, setToken]= useState("")

  const handleLogin = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          password
        })
      })

      const result = await response.json();
      const { token } = result;
      setToken(token)
      if (!response.ok){
        setErrorMsg(result.error||'Something went wrong');
      } else {
        setErrorMsg('');
        console.log('You are logged in', result);
      }
    } catch (error) {
      console.error('Login failed. Please check your credentials', error)
    }
  }
  return (
  <div className="login">
    <div className="login__form-container">
      <h1 className="login__form-title">
        My account
        {token}
      </h1>
      <form className="login__form">
        <div>
          <label htmlFor="userName" className='login__label'>Username</label>
          <input id="userName" value={userName} className='login__input' placeholder='Enter your username' onChange={(e)=> setUserName(e.target.value.toLowerCase().trim())}></input>
          <label htmlFor="password" className='login__label'>Password</label>
          <input id="password" value={password} type="password" className='login__input' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button className="login__button" onClick={handleLogin}>Login</button>
      </form>
      {errorMsg.length>0&&<div>{errorMsg}</div>}

    </div>

  </div>
  )
}

export { Login }