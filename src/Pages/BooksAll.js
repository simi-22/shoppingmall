import React, { useEffect, useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import BooksCard from '../Component/BooksCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const BooksAll = () => {
    const booksList = useSelector(state => state.product.booksList)
    const [query, setquery] =useSearchParams();
    const dispatch = useDispatch();
    const getBooks = () => {
        let searchQuery = query.get('q') || "";
        console.log("쿼리값은?",searchQuery);
        dispatch(productAction.getBooks(searchQuery));
        
    }
    useEffect(()=>{
        getBooks();
    },[query])

    return (
    <div id='books-all-container'>
        <ul>
            {booksList.map(item => (
                <li><BooksCard item={item}/></li>
            ))}
        </ul>
    </div>
  )
}

export default BooksAll