import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
  return (
    <div id="cart">
        <h4>장바구니</h4>
        <div className='cart-container'>
            <div>
                <p>장바구니에 담긴 상품이 없습니다.</p>
                <button onClick={goHome}>쇼핑하기</button>
            </div>
        </div>
    </div>
  )
}

export default Cart