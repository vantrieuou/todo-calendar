import React from 'react'

const Todo = ({ isCompleted, title, date }) => (
  <li
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none',
    }}
  >
    {title} - {date}
  </li>
)

export default Todo
