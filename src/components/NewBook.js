import React from 'react'

import AddBookForm from './AddBookForm'
import '../../css/new-book.css'

const NewBook = ({ onBookAdd, onPlusBtnClick, isActive }) => {
    let titleInput
    let authorInput

    const onAddBtnClick = (e) => {
        e.preventDefault()
        onBookAdd(titleInput.value.trim(), authorInput.value.trim())
    }

    const onFormKeyPress = (e) => {
        if (e.target.keyCode == 13) {
            onBookAdd(titleInput.value.trim(), authorInput.value.trim());
        }
    }

    const onClick = (e) => {
         if (isActive == false) {
             onPlusBtnClick(!isActive)
         }
    }

    return (
        <div className={'newBook newBook__add-btn ' + (isActive ? 'active' : '')} onClick={onClick}>
            <div className="newBook__body">
                <AddBookForm onBookAdd={onBookAdd} />
            </div>
            <i className="fa fa-plus"></i>
        </div>
    )
}

export default NewBook
