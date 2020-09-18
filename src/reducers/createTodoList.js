import without from 'lodash.without'

const initialByDate = {
  ids: [],
  isFetching: false,
  errorMessage: null,
}

const createTodoList = (state = initialByDate, action) => {
  const ids = () => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return action.response.map((todo) => todo.id)

      case 'ADD_TODO_SUCCESS':
        return [...state.ids, action.response.id]

      case 'TOGGLE_TODO_SUCCESS':
        return state.ids.includes(action.response.id)
          ? state.ids
          : [...state.ids, action.response.id]

      case 'REMOVE_TODO_SUCCESS':
        state.ids = without(state.ids, parseInt(action.id))
        return state.ids

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

export const getIds = (state = initialByDate) => state.ids
export const getIsFetching = (state = initialByDate) => state.isFetching
export const getErrorMessage = (state = initialByDate) => state.errorMessage
