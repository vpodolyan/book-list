import React from 'react'
import Book from './Book.js'

const BookList = ({books, removeBook}) => (
    <div>
    <h1>Books</h1>
    {books.map(book =>
        <Book
            key={book.id}
            {...book}
            onDeleteButtonClick={() => removeBook(book.id)}
        />
    )}
    </div>
)

export default BookList
