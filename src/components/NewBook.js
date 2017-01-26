import React from 'react'

import '../../css/new-book.css'

const NewBook = ({ onBookAdd, onPlusBtnClick, isActive }) => {
    let titleInput
    let authorInput

    const onAddBtnClick = (e) => {
        e.preventDefault()
        onBookAdd(titleInput.value.trim(), authorInput.value.trim())
    }

    const onPlusClick = (e) => {
        e.target.classList.add("active");
    }

    return (
        <div className={'newBook newBook__add-btn ' + (isActive ? 'active' : '')} onClick={(e) => { if (isActive == false) { onPlusBtnClick(!isActive) } }}>
            <div className="newBook__body">
                <form className="newBook__add-form" onSubmit={(e) => onAddBtnClick(e)}>
                    <div className="book">
                        <div className="book_inner">
                            <div className="book__title">
                                <input type="text" ref={node => { titleInput = node }} />
                            </div>
                            <div className="book__author">
                                <input type="text" ref={node => { authorInput = node }} />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
            <i className="fa fa-plus"></i>
        </div>
    )
}

export default NewBook
