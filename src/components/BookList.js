import React from 'react'
import Book from './Book.js'

const BookList = ({books}) => (
    <div>
    <h1>Book list</h1>
    {books.map(book =>
        <Book
            key={book.id}
            {...books}
        />
    )}
    </div>
)

export default BookList
