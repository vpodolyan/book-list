import React from 'react'

const NewBook = ({ onBookAdd }) => {
    let titleInput
    let authorInput

    const onAddBtnClick = (e) => {
        e.preventDefault()
        onBookAdd(titleInput.value.trim(), authorInput.value.trim())
    }

    return (
        <form onSubmit={(e) => onAddBtnClick(e)}>
            <input type="text" ref={node => { titleInput = node }} />
            <input type="text" ref={node => { authorInput = node }} />
            <input className = "NewBook__add-btn" type="submit" value="Add" />
        </form>
    )
}

export default NewBook
