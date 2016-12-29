import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

import NewBook from '../components/NewBook'

const mapStateToProps = (state) => {
    return {
        isActive: state.addBookButton.isActive
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBookAdd: (title, author) => {
      dispatch(addBook(title, author))
    }
  }
}

const NewBookContainer = connect(mapStateToProps, mapDispatchToProps)(NewBook)

export default NewBookContainer
