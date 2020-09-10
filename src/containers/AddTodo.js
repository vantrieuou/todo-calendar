import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch, selectedDate }) => {
  let input

  return selectedDate ? (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, selectedDate))
        input.value = ''
      }}
    >
      <input ref={(node) => (input = node)} />
      <button type="submit">Add Todo</button>
    </form>
  ) : (
    <></>
  )
}

export default connect(({ selectedDate }) => ({ selectedDate }))(AddTodo)
