import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();

    //login 폼 새로고침 막기
    const loginUser = (event) => {
        event.preventDefault();
        setAuthenticate(true);
        console.log("login");
        navigate("/");
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