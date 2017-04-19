import React from 'react'
import Book from './Book.js'
import EditableBook from './EditableBook'

const BookList = ({books, removeBook, onDoubleClick, completeEdit}) => (
    <div>
        <h1>Books</h1>
        {books.map(book => {
            const props = {
                ...book,
                onDeleteButtonClick: () => removeBook(book.id),
                onDoubleClick: () => onDoubleClick(book.id)
            }

            if (book.editable) {
                return <EditableBook
                            key={book.id}
                            {...book}
                            isActive
                            onCancel={() => onDoubleClick(book.id)}
                            onComplete={(title, author) => completeEdit(book.id, title, author)}
                            onDoubleClick={() => onDoubleClick(book.id)}
                        />
            }
            
            return <Book
                        key={book.id}
                        {...book}
                        onDeleteButtonClick={() => removeBook(book.id)}
                        onDoubleClick={() => onDoubleClick(book.id)}
                    />
            }
        )}
    </div>
)

export default BookList
