import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { addTodo } from '../actions'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
const StyledForm = styled(Form)`
  margin: 6px;
`

const AddTodo = ({ dispatch }) => {
  let input
  const { selectedDate } = useParams()

  return (
    !!selectedDate && (
      <StyledForm
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
      </StyledForm>
    )
  )
}

export default connect()(AddTodo)
