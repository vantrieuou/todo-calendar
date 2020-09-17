const createTodoList = (
  state = {
    ids: [],
    isFetching: false,
    errorMessage: null,
  },
  action
) => {
  const ids = () => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return action.response.map((todo) => todo.id)
      case 'ADD_TODO_SUCCESS': {
        const ids = state.ids.push(action.response.id)
        return state.ids
      }
      default:
        return state.ids
    }
  }

  const isFetching = () => {
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
