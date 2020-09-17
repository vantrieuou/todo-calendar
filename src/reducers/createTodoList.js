const createTodoList = (
  state = {
    ids: [],
    isFetching: false,
    errorMessage: null,
  },
  selectedDate = 'all',
  action
) => {
  const ids = () => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return action.response
          .filter((todo) => action.date === 'all' || action.date == todo.date)
          .map((todo) => todo.id)
      // case 'ADD_TODO_SUCCESS':
      //   return date !== 'completed' ? [...state, action.response.id] : state
      default:
        return state.ids
    }
  }

  const isFetching = () => {
    if (selectedDate !== action.date) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false
      default:
        return state.isFetching
    }
  }

  const errorMessage = () => {
    if (selectedDate !== action.date) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null
      default:
        return state.errorMessage
    }
  }

  return {
    ids: ids(),
    isFetching: isFetching(),
    errorMessage: errorMessage(),
  }
}

export default createTodoList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
