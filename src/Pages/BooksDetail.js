import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BooksDetail = () => {
    let { id } = useParams();
    const[books, setBooks] = useState(null);

    const getBooksDetail = async() => {
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setBooks(data);
    }
    useEffect(()=>{
        getBooksDetail()
    },[]);
  return (
    <div id='books-detail-container'>
        <div>
            <img src={books?.img} alt={books?.title} />
        </div>
        <div>
            <h2>{books?.title}</h2>
            <div>
                <div>
                    <p>{books?.author}<span>저</span></p>
                    <p>{books?.company}</p>
                    <p>{books?.publish}</p>
                </div>
                <div>첫번째 리뷰어가 되어주세요.</div>
            </div>
            <ul>
                <li>
                    <p>정가</p>
                    <p>{books?.price}<span>원</span></p>
                </li>
                <li>
                    <p>판매가</p>
                    <p>{books?.price - books?.price*0.1}<span>원</span><span>(10%할인)</span></p>
                </li>
                <li>
                    <p>최대혜택가</p>
                    <p>{books?.price - 3000}<span>원</span></p>
                </li>
            </ul>
            <div className='bd-button-wrap'>
            <button>카트에 넣기</button>
            <button>바로구매</button>
            </div>
        </div>
    </div>
  )
}

export default BooksDetail