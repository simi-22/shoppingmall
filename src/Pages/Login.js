import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    //login 폼 새로고침 막기
    const loginUser = (event) => {
        event.preventDefault();
        dispatch(authenticateAction.login(id,password));
        console.log("login");
        navigate("/");
    }
  return (
    <div id='login'>
        <form onSubmit = {(event) => loginUser(event)}>
            <input type='text' placeholder='아이디' onChange={(event)=>{setId(event.target.value)}}/>
            <input type='password' placeholder='비밀번호' onChange={(event)=>{setPassword(event.target.value)}}/>
            <button type='submit'>로그인</button>
            <button>회원가입</button>
        </form>
    </div>
  )
}

export default Login