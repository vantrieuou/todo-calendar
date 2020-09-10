import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'

import { selectDate, fetchTodosIfNeeded, invalidateDate } from '../actions'

class App extends React.Component {
  componentDidMount() {
    const { dispatch, selectedDate } = this.props
    dispatch(fetchTodosIfNeeded(selectedDate))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedDate !== this.props.selectedDate) {
      const { dispatch, selectedDate } = this.props
      dispatch(fetchTodosIfNeeded(selectedDate))
    }
  }

  handleSelectDate = (date) => {
    const { dispatch } = this.props
    if (date) dispatch(selectDate(date.toISOString().substr(0, 10)))
    else dispatch(selectDate(''))
    return
  }

  render() {
    const { todos } = this.props
    return (
      <div>
        <Header handleSelectDate={this.handleSelectDate} />
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedDate, todosByDate } = state
  const { isFetching, items: todos } = todosByDate[selectedDate] || {
    isFetching: true,
    items: [],
  }

  return {
    isFetching,
    todos,
    selectedDate,
  }
}

export default connect(mapStateToProps)(App)
