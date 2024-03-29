import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Component/NavBar.css'
// import Home from './Pages/Home';
// import Cart from './Pages/Cart';
import './Component/BooksCard.css'
import './Pages/Login.css'
import './Pages/Cart.css'
import './Pages/BooksDetail.css'

import BooksDetail from './Pages/BooksDetail';
import Login from './Pages/Login';
import BooksAll from './Pages/BooksAll';
import NavBar from './Component/NavBar';
import { useEffect, useState } from 'react';
import PrivateRoute from './Route/PrivateRoute';
// import BooksCard from './Component/BooksCard';



//1.전체상품페이지, 로그인, 상품상세페이지, 장바구니
//2.전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 장바구니 버튼을 눌렀으나 로그인이 안되어있을 경우에는 로그인 창이 나온다.
//5. 로그인이 되어있을 경우에는 장바구니 페이지를 볼 수 있다.
//6. 로그아웃버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이되면 장바구니를 볼 수 없다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.



//6. 알라딘같은 책 쇼핑몰만들것
//7. json 파일 만들기
//책표지, 책 이름, 작가이름, 가격, new, 장르, choice


function App() {
  //로그인 여부
  const[authenticate, setAuthenticate] = useState(false); //로그인 여부
  useEffect(()=>{
    console.log(authenticate);
  })
  return (
    <div className="App">
       <NavBar />
       <Routes>
        <Route path='/' element={<BooksAll />} />
        <Route path='/cart' element={<PrivateRoute authenticate={authenticate}/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/Books/:id' element={<BooksDetail />} />
       </Routes>
    </div>
  );
}

export default App;
