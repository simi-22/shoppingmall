import React, { useEffect, useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import BooksCard from '../Component/BooksCard';
import { useSearchParams } from 'react-router-dom';

const BooksAll = () => {
    const [booksList, setBooksList] = useState([]);
    const [query, setquery] =useSearchParams();
    const getBooks = async() => {
        let searchQuery = query.get('q') || "";
        console.log("쿼리값은?",searchQuery);
        // let url = `http://localhost:4000/products`
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setBooksList(data);
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