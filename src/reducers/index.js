import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createTodoList, * as fromList from './createTodoList'

// const selectedDate = (state = 'all', action) => {
//   switch (action.type) {
//     case 'SELECT_DATE':
//       return action.date

//     default:
//       return state
//   }
// }

const listByDate = (state = {}, action) => {
  const date = action.date || 'all'

  return {
    ...state,
    [date]: createTodoList(state[date], action),
  }
}

const todos = combineReducers({
  byId,
  listByDate,
  // selectedDate,
})

export default todos

export const getVisibleTodos = (state, date) => {
  const ids = fromList.getIds(state.listByDate[date])
  return ids
    .filter((id) => !!fromById.getTodo(state.byId, id))
    .map((id) => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, date) =>
  fromList.getIsFetching(state.listByDate[date])

export const getErrorMessage = (state, date) =>
  fromList.getErrorMessage(state.listByDate[date])
