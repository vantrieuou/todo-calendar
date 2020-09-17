import React from 'react'
import Todo from './Todo'
import { List } from 'semantic-ui-react'

export default ({ todos }) => (
  <List selection verticalAlign="middle">
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
    ))}
  </List>
)
