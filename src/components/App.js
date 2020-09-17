import React, { PropTypes } from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Segment } from 'semantic-ui-react'
import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'

const App = () => (
  <div>
    <Header
      as="h3"
      content="Todo Calendar Simple App"
      textAlign="center"
      style={{ marginTop: '3em' }}
    />
    <Container text>
      <Segment.Group>
        <Segment>
          <SingleDatePicker
            startDate={new Date()}
            dateFormat="YYYY-MM-DD"
            monthFormat="MMM YYYY"
            startWeekDay="monday"
            highlightToday="true"
          />
          <AddTodo />
        </Segment>
        <Segment>
          <VisibleTodoList />
        </Segment>
      </Segment.Group>
    </Container>
  </div>
)

export default App
