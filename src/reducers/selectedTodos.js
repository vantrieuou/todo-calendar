import { combineReducers } from 'redux'
import {
  SELECT_DATE,
  INVALIDATE_DATE,
  REQUEST_TODOS,
  RECEIVE_TODOS,
} from '../actions'

const selectedDate = (state = '', action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.date

    default:
      return state
  }
}

const selectTodos = (
  state = { isFetching: false, didInvalidate: false, items: [] },
  action
) => {
  switch (action.type) {
    case INVALIDATE_DATE:
      return {
        ...state,
        didInvalidate: true,
      }

    case REQUEST_TODOS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: true,
      }
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.todos,
      }

    default:
      return state
  }
}

const todosByDate = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_DATE:
    case RECEIVE_TODOS:
    case REQUEST_TODOS:
      return {
        ...state,
        [action.date]: selectTodos(state[action.date], action),
      }

    default:
      state
  }
}

export default combineReducers({
  selectedDate,
  todosByDate,
})
