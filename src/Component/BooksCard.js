import React from 'react'

const BooksCard = ({item}) => {
  return (
    <div id='books-card-container'>
        <ul>
            <li>
                <img src={item?.img} alt=''/>
                <h6>{item?.title}</h6>
                <p>{item?.author} <span>저</span></p>
                <p>{item?. company}</p>
                <p>{item?.price} <span>원</span></p>
            </li>
        </ul>
    </div>
  )
}

export default BooksCard