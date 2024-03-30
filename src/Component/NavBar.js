import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = ({authenticate, setAuthenticate}) => {
  const menuList = ['소설/시','인문', '역사', '예술', '종교', '자기계발', '만화', 'IT', '자격증'];
  const navigate = useNavigate();

  //메뉴클릭이벤트
  const [navClick, setNavClick] = useState('');

  useEffect(() => {
    handleNavClick();
  }, [navClick])

  const handleNavClick = () => {
    navigate(`/?q=${navClick}`);
  }

  const goToLogin = () => {
    if(authenticate){
      setAuthenticate(false);
    }else {
      navigate("/login");
    }
  }

  const showCart = () => {
    navigate("/cart")
  }
  const goHome = () => {
    navigate("/")
  }
  //엔터키
  const search = (event) => {
    if(event.key === "Enter"){
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`)
    }
  }

  //모바일 메뉴제어
  const [menuListVisible, setMenuListVisible] = useState(false);

  const handleMobileMenu = () => {
    // menuListVisible 상태를 토글하여 보이기/숨기기를 제어
    setMenuListVisible(!menuListVisible);
  };

  const closeMobileMenu = () => {
    // 메뉴를 닫을 때 mobile-menu-list 요소의 클래스를 hidden으로 변경
    setMenuListVisible(false);
  };


  return (
    <div id='Navbar'>
      <div id='pc-menu'>
        <ul className='n-first-l'>
          <li><button onClick={showCart}>장바구니</button></li>
          <li><button onClick={goToLogin}>{authenticate ? "로그아웃" : "로그인"}</button></li>
        </ul>
        <div className='n-second-l'>
          <h1><button onClick={goHome}><img src="https://image.yes24.com/sysimage/renew/gnb/logoN4.svg" alt='예스24 로고'/></button></h1>
          <input type='text' placeholder='책 제목, 작가명을 입력하세요.' onKeyPress={(event) => search(event)}></input>
          <button className='input-btn'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <div className='n-third-l'>
          <ul>
            {menuList.map((item) => (
              <li><button onClick={() => setNavClick(item)}>{item}</button></li>
            ))}
          </ul>
        </div>
      </div>
      <div id='mobile-menu'>
        <div>
          <button className='m-menu-btn' onClick={handleMobileMenu}><FontAwesomeIcon icon={faBars}/></button>
          <ul>
            <li><button onClick={showCart}>장바구니</button></li>
            <li><button onClick={goToLogin}>{authenticate ? "로그아웃" : "로그인"}</button></li>
          </ul>
        </div>
        <h1><button onClick={goHome}><img src="https://image.yes24.com/sysimage/renew/gnb/logoN4.svg" alt='예스24 로고'/></button></h1>
      </div>
      <div id='mobile-menu-list' className={menuListVisible ? 'active' : 'hidden'}>
      <input type='text' placeholder='책 제목, 작가명을 입력하세요.' onKeyPress={(event) => search(event)}></input>
          <ul>
            {menuList.map((item) => (
              <li><button onClick={() => setNavClick(item)}>{item}</button></li>
            ))}
          </ul>
          <button className='m-close-btn' onClick={closeMobileMenu}><FontAwesomeIcon icon={faXmark}/></button>
      </div>
    </div>
  )
}

export default NavBar