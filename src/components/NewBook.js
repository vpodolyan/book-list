import React from 'react'

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

    return (
        <div className={'newBook newBook__add-btn ' + (isActive ? 'active' : '')} onClick={(e) => { if (isActive == false) { onPlusBtnClick(!isActive) } }}>
            <div className="newBook__body">
                <form className="newBook__add-form" onKeyPress={onFormKeyPress} onSubmit={onAddBtnClick}>
                    <div className="book">
                        <div className="book_inner">
                            <div className="book__title">
                                <input type="text" ref={node => { titleInput = node }} onKeyPress={onFormKeyPress} />
                            </div>
                            <div className="book__author">
                                <input type="text" ref={node => { authorInput = node }} onKeyPress={onFormKeyPress} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <i className="fa fa-plus"></i>
        </div>
    )
}

export default NewBook
