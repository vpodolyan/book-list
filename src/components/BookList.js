import React from 'react'
import Book from './Book.js'

const BookList = ({books}) => (
    <div>
    {books.map(book =>
        <Book key={book.id} />
    )}
    </div>
)

export default BookList
