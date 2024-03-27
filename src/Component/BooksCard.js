import React from 'react'

const BooksCard = ({item}) => {
  return (
    <div id='books-card-container'>
        <ul>
            <li>
                <img src={item?.img} alt=''/>
                <h6>{item?.title}</h6>
                <p>{item?.author} 저</p>
                <p>{item?.price}원</p>
            </li>
        </ul>
    </div>
  )
}

export default BooksCard