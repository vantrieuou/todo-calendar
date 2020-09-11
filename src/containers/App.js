import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import TodoHeader from '../components/Header'
import AddTodo from './AddTodo'
import TodoList from '../components/TodoList'

import { Container, Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { selectDate, fetchTodosIfNeeded, invalidateDate } from '../actions'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

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

    if (date) dispatch(selectDate(moment(date).format('YYYY-MM-DD')))
    else dispatch(selectDate(''))
    return
  }

  render() {
    const { todos } = this.props
    return (
      <div>
        <Header
          as="h3"
          content="Todo Calendar App Sample"
          style={style.h3}
          textAlign="center"
        />
        <Container text>
          <Segment.Group>
            <Segment>
              <TodoHeader handleSelectDate={this.handleSelectDate} />
              <AddTodo />
            </Segment>
            <Segment>
              <TodoList todos={todos} />
            </Segment>
          </Segment.Group>
        </Container>
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
