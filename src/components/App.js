import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Calendar from './Calendar'

import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Segment } from 'semantic-ui-react'

export default () => (
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
          <Calendar />
          <AddTodo />
        </Segment>
        <Segment>
          <VisibleTodoList />
        </Segment>
      </Segment.Group>
    </Container>
  </div>
)
