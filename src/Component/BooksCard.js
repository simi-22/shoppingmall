import React from 'react'
import { useNavigate } from 'react-router-dom'

const BooksCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/Books/${item.id}`)
    }
  return (
    <li id='books-card-container' onClick={showDetail}>
        <img src={item?.img} alt={item?.title}/>
        <h6>{item?.title}</h6>
        <p>{item?.author} <span>저</span></p>
        <p>{item?.company}</p>
        <p>{item?.price} <span>원</span></p>
    </li>
  )
}

export default BooksCard