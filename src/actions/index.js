import * as types from './types'

export const addBook = (title, author) => {
  return {
    type: types.ADD_BOOK,
    title,
    author
  }
}

export const editBook = (id, title, author) => {
  return {
    type: types.EDIT_BOOK,
    id,
    title,
    author
  }
}

export const removeBook = (id) => {
  return {
    type: types.REMOVE_BOOK,
    id,
  }
}
