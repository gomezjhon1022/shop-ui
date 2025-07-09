import { useState } from 'react';
import './SignUp.css'

function SignUp(){
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const handleCreate = (e)=>{
    e.preventDefault()
    console.log(userName);
    console.log(email);
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
          <input id="userName" value={userName} className='sign-up__input' placeholder='jhon' onChange={(e)=> setUserName(e.target.value)}></input>
          <label htmlFor="email" className='sign-up__label'>Email</label>
          <input id="email" value={email} type="email" className='sign-up__input' placeholder='jhon@example.com' onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <button className="sign-up__button" onClick={handleCreate}>Create</button>
      </form>

    </div>

  </div>
  )
}

export { SignUp }