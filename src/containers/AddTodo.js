import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form } from 'semantic-ui-react'

const AddTodo = ({ dispatch, selectedDate }) => {
  let input

  return selectedDate ? (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, selectedDate))
        input.value = ''
      }}
    >
      <Form.Group>
        <Form.Field>
          <input placeholder="Add Todo" ref={(node) => (input = node)} />
        </Form.Field>
        <Form.Button content="Submit" color="blue" />
      </Form.Group>
    </Form>
  ) : (
    <></>
  )
}

export default connect(({ selectedDate }) => ({ selectedDate }))(AddTodo)
