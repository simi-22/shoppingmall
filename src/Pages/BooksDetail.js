import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction';

const BooksDetail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const booksDetail = useSelector(state => state.product.detail)

    // const getBooksDetail = () => {
    //     dispatch(productAction.getBooksDetail(id));
    // }

    useEffect(() => {
        dispatch(productAction.getBooksDetail(id));
    }, []);

  return (
    <div id='books-detail-container'>
        <div>
            <img src={booksDetail?.img} alt={booksDetail?.title} />
        </div>
        <div>
            <h2>{booksDetail?.title}</h2>
            <div>
                <div>
                    <p>{booksDetail?.author}<span>저</span></p>
                    <p>{booksDetail?.company}</p>
                    <p>{booksDetail?.publish}</p>
                </div>
                <div>첫번째 리뷰어가 되어주세요.</div>
            </div>
            <ul>
                <li>
                    <p>정가</p>
                    <p>{booksDetail?.price}<span>원</span></p>
                </li>
                <li>
                    <p>판매가</p>
                    <p>{booksDetail?.price - booksDetail?.price*0.1}<span>원</span><span>(10%할인)</span></p>
                </li>
                <li>
                    <p>최대혜택가</p>
                    <p>{booksDetail?.price - 3000}<span>원</span></p>
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