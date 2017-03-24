import React from 'react'

import AddBookForm from './AddBookForm'
import AddBookButton from './AddBookButton'

import '../../css/new-book.css'

const NewBook = ({ onBookAdd, onPlusBtnClick, isActive }) => {
    let titleInput
    let authorInput

    const onClick = (e) => {
         if (isActive == false) {
             onPlusBtnClick(!isActive)
         }
    }

    return (
        <div>
            <div className={'newBook newBook__add-btn ' + (isActive ? 'active' : '')} onClick={onClick}>
                <div className="newBook__body">
                    <AddBookForm onBookAdd={onBookAdd} isOpen={isActive} />
                </div>
            </div>
            <AddBookButton onClick={onClick} />
        </div>
    )
}

export default NewBook
