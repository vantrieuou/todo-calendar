export const REQUEST_TODOS = 'REQUEST_TODOS'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const SELECT_DATE = 'SELECT_DATE'
export const INVALIDATE_DATE = 'INVALIDATE_DATE'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

const homeUrl = 'http://localhost:3001'

// FILTER & FETCH TODOS
export const selectDate = (date) => ({
  type: SELECT_DATE,
  date,
})

export const invalidateDate = (date) => ({
  type: INVALIDATE_DATE,
  date,
})

export const requestTodos = (date) => ({
  type: REQUEST_TODOS,
  date,
})

export const receiveTodos = (date, json) => ({
  type: REQUEST_TODOS,
  date,
  todos: json.data.children.map((child) => child.data),
})

const fetchTodos = (date) => (dispatch) => {
  dispatch(requestTodos(date))
  return fetch(`${homeUrl}/?date=${date}`)
    .then((response) => response.json())
    .then((json) => dispatch(receiveTodos(date, json)))
}

const shouldFetchTodos = (state, date) => {
  const todos = state.todosByDate[date]
  if (!todos) {
    return true
  }
  if (todos.isFetching) {
    return false
  }
  // didInvalidate: enable or disable fetching todos
  return todos.didInvalidate
}

export const fetchTodosIfNeeded = (date) => (dispatch, getState) => {
  if (shouldFetchTodos(getState(), date)) {
    return dispatch(fetchTodos(date))
  }
}

// Create+Update+Delete TODOS
export const addTodo = (title, date) => ({
  type: ADD_TODO,
  title,
  date,
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
})

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
})
