import React from 'react'
import Todo from '../containers/Todo'
import { List } from 'semantic-ui-react'

const TodoList = ({ todos }) => (
  <List selection  verticalAlign="middle">
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
    ))}
  </List>
)

export default TodoList
