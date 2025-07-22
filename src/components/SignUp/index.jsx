import { useState } from 'react';
import './SignUp.css'

function SignUp(){
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg]=useState('');
  const handleCreate = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/users',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          email,
          password
        })
      })

      const result = await response.json();
      if (!response.ok){
        setErrorMsg(result.error||'Something went wrong');
      } else {
        setErrorMsg('');
        console.log('User created', result);
      }
    } catch (error) {
      console.error('Failed to connect to backend', error)
    }
  }
  return (
  <div className="sign-up">
    <div className="sign-up__form-container">
      <h1 className="sign-up__form-title">
        My account
      </h1>
      <form className="sign-up__form">
        <div>
          <label htmlFor="userName" className='sign-up__label'>UserName</label>
          <input id="userName" value={userName} className='sign-up__input' placeholder='jhon' onChange={(e)=> setUserName(e.target.value.toLowerCase().trim())}></input>
          <label htmlFor="email" className='sign-up__label'>Email</label>
          <input id="email" value={email} type="email" className='sign-up__input' placeholder='jhon@example.com' onChange={(e)=>setEmail(e.target.value)}></input>
          <label htmlFor="password" className='sign-up__label'>Password</label>
          <input id="password" value={password} type="password" className='sign-up__input' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button className="sign-up__button" onClick={handleCreate}>Create</button>
      </form>
      {errorMsg.length>0&&<div>{errorMsg}</div>}

    </div>

  </div>
  )
}

export { SignUp }