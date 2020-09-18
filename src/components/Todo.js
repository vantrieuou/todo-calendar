import React from 'react'
import { connect } from 'react-redux'
import { List, Button, Checkbox } from 'semantic-ui-react'
import { toggleTodo, removeTodo } from '../actions'

const Todo = ({ id, title, isCompleted, date, selectedDate, dispatch }) => {
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
          <Checkbox
            label={`${title} - ${date}`}
            checked={isCompleted}
            style={{
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
            onClick={() => dispatch(toggleTodo(id))}
          />
        </List.Header>
      </List.Content>
    </List.Item>
  )
}

export default connect(({ selectedDate }) => ({ selectedDate }))(Todo)
