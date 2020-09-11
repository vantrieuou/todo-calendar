import React from 'react'
import { connect } from 'react-redux'
import { List, Button, Checkbox } from 'semantic-ui-react'
import { toggleTodo, removeTodo } from '../actions'

const Todo = ({ id, title, isCompleted, date, dispatch }) => (
  <List.Item>
    <List.Content floated="right">
      <Button
        icon="close"
        color="red"
        circular
        size="mini"
        inverted
        onClick={() => dispatch(removeTodo(id, date))}
      />
    </List.Content>
    <List.Content
      as="a"
      onClick={() => dispatch(toggleTodo(id, title, !isCompleted, date))}
    >
      <List.Header>
        <Checkbox
          label={`${title} - ${date}`}
          checked={isCompleted}
          style={{
            textDecoration: isCompleted ? 'line-through' : 'none',
          }}
        />
      </List.Header>
    </List.Content>
  </List.Item>
)

export default connect()(Todo)
