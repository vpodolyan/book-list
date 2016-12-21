import React from 'react'

const NewBook = ({ onBookAdd }) => {
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
        <div className="newBook newBook__add-btn" onClick={(e) => onPlusClick(e)}>
            <form onSubmit={(e) => onAddBtnClick(e)}>
                <input type="text" ref={node => { titleInput = node }} />
                <input type="text" ref={node => { authorInput = node }} />
            </form>
            <i className="fa fa-plus"></i>
        </div>
    )
}

export default NewBook
