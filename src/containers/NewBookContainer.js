import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

import NewBook from '../components/NewBook'

const mapDispatchToProps = (dispatch) => {
  return {
    onBookAdd: (title, author) => {
      dispatch(addBook(title, author))
    }
  }
}

const NewBookContainer = connect(undefined, mapDispatchToProps)(NewBook)

export default NewBookContainer
