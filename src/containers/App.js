import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

import { selectedDate, fetchTodosIfNeeded, invalidateDate } from '../actions'

class App extends React.Component {
  componentDidMount() {
    const { dispatch, selectedDate } = this.props
    dispatch(fetchTodosIfNeeded(selectedDate))
  }

  render() {
    const { todos } = this.props
    return (
      <div>
        <Header />
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
