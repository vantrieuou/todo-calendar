import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers'
import TodoList from './TodoList'
import FetchError from './FetchError'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedDate !== prevProps.selectedDate) {
      this.fetchData()
    }
  }

  fetchData() {
    const { selectedDate, fetchTodos } = this.props
    fetchTodos(selectedDate)
  }

  render() {
    const { isFetching, errorMessage, toggleTodo, todos } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      )
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />
  }
}

const mapStateToProps = (state) => {
  const selectedDate = state.selectedDate || 'all'

  return {
    isFetching: getIsFetching(state, selectedDate),
    errorMessage: getErrorMessage(state, selectedDate),
    todos: getVisibleTodos(state, selectedDate),
    selectedDate,
  }
}

export default connect(mapStateToProps, actions)(VisibleTodoList)
