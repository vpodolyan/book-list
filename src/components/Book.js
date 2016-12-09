import React from 'react'

const Book = ({title, author}) => (
    <div>
        <div className="book__title">{title}</div>
        <div className="book__author">{author}</div>
    </div>
)

export default Book
