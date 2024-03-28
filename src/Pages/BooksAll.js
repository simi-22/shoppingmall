import React, { useEffect, useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import BooksCard from '../Component/BooksCard';

const BooksAll = () => {
    const [booksList, setBooksList] = useState([]);
    const getBooks = async() => {
        // let url = `http://localhost:4000/products`
        let url = `https://gist.githubusercontent.com/simi-22/c0e7c1c0f351776e69937a45a6cd92fb/raw/ea1a242ff83ea12372ba9e29d273721395757b7f/BooksAll.json/products`
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