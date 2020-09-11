import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'

const Todo = ({ id, title, isCompleted, date, dispatch }) => (
  <li
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none',
    }}
    onClick={() => dispatch(toggleTodo(id, title, !isCompleted, date))}
  >
    {title} - {date}
  </li>
)

export default connect()(Todo)
