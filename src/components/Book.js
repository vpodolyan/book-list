import React from 'react'

const Book = ({title, author}) => (
        <div className="book">
            <div className="book_inner">
                <div className="book__title">{title}</div>
                <div className="book__author">{author}</div>
            </div>
        </div>
)

export default Book
