import React from 'react'
import Todo from '../containers/Todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
)

export default TodoList
