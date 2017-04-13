import React from 'react'
import Book from './Book.js'

const BookList = ({books}) => (
    <div>
    <h1>Books</h1>
    {books.map(book =>
        <Book
            key={book.id}
            {...book}
        />
    )}
    </div>
)

export default BookList
