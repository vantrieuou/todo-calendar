import React from 'react'
import { connect } from 'react-redux'
import { List, Button, Checkbox } from 'semantic-ui-react'
import { toggleTodo, removeTodo } from '../actions'
import styled from 'styled-components'
const StyledCheckbox = styled(Checkbox)`
  ${(props) => {
    if (props.checked) {
      return ` text-decoration: line-through; `
    }
  }}
`

const Todo = ({ id, title, isCompleted, date, dispatch }) => {
  return (
    <List.Item>
      <List.Content floated="right">
        <Button
          icon="close"
          color="red"
          circular
          size="mini"
          inverted
          onClick={() => dispatch(removeTodo(id))}
        />
      </List.Content>
      <List.Content as="a">
        <List.Header>
          <StyledCheckbox
            label={`${title} - ${date}`}
            checked={isCompleted}
            onClick={() => dispatch(toggleTodo(id))}
          />
        </List.Header>
      </List.Content>
    </List.Item>
  )
}

export default connect()(Todo)
