import React from 'react'

const Login = ({setAuthenticate}) => {
    const loginUser = (event) => {
        event.preventDefault();
        setAuthenticate(true);
        console.log("login");
    }
  return (
    <div id='login'>
        <form onSubmit = {(event) => loginUser(event)}>
            <input type='text' placeholder='아이디' />
            <input type='password' placeholder='비밀번호' />
            <button type='submit'>로그인</button>
            <button>회원가입</button>
        </form>
    </div>
  )
}

export default Login