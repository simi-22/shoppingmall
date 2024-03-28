import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const menuList = ['소설/시','인문', '역사', '예술', '종교', '자기계발', '만화', 'IT', '자격증'];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login")
  }

  return (
    <div id='Navbar'>
      <ul className='n-first-l'>
        <li><button>장바구니</button></li>
        <li><button onClick={goToLogin}>로그인</button></li>
      </ul>
      <div className='n-second-l'>
        <h1><img src="https://image.yes24.com/sysimage/renew/gnb/logoN4.svg" alt='예스24 로고'/></h1>
        <input type='text' placeholder='책 제목을 입력하세요.'></input>
        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </div>
      <div className='n-third-l'>
        <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar