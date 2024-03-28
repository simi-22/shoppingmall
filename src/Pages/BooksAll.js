import React, { useEffect, useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import BooksCard from '../Component/BooksCard';

const BooksAll = () => {
    const [booksList, setBooksList] = useState([]);
    const getBooks = async() => {
        // let url = `http://localhost:4000/products`
        let url = `https://my-json-server.typicode.com/simi-22/shoppingmall/products`
        let response = await fetch(url);
        let data = await response.json();
        setBooksList(data);
    }
    useEffect(()=>{
        getBooks();
    },[])
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