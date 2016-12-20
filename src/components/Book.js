import React from 'react'

const Book = ({title, author, onBookAdd}) => {

    const onAddBtnClick = (e) => {
        e.preventDefault()
        // if (!input.value.trim()) {
        //   return
        // }
        // dispatch(addAchievement(input.value))
        // input.value = ''
        // input.focus()
        // onBookAdd();
    }

    return (
        <div>
            <form>
                <div className="book__title">{title}</div>
                <div className="book__author">{author}</div>
            </form>
        </div>
    )
}

export default Book
