import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers'
import TodoList from '../components/TodoList'
import FetchError from '../components/FetchError'
import { withRouter } from 'react-router'

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
      return <FetchError message={errorMessage} />
    }

    return <TodoList todos={todos} onTodoClick={toggleTodo} />
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const selectedDate = params.selectedDate || 'all'

  return {
    isFetching: getIsFetching(state, selectedDate),
    errorMessage: getErrorMessage(state, selectedDate),
    todos: getVisibleTodos(state, selectedDate),
    selectedDate,
  }
}

export default withRouter(connect(mapStateToProps, actions)(VisibleTodoList))
