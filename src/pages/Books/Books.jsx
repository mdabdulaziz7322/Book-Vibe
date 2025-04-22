import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => { setAllBooks(data) })
    }, [])
    return (
        <div >
            <h1 className='text-3xl text-center p-6 '>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;