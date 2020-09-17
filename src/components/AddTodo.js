import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { addTodo } from '../actions'

const AddTodo = ({ selectedDate, dispatch }) => {
  let input

  return selectedDate ? (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
      style={{ margin: '6px' }}
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
