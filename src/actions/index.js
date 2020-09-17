import axios from 'axios'

const apiUrl = 'http://localhost:3001/todos'

export const selectDate = (date) => ({
  type: 'SELECT_DATE',
  date,
})

// FILTER & FETCH TODOS
export const fetchTodos = (date) => (dispatch, getState) => {
  const url = apiUrl + (date !== 'all' ? `/?date=${date}` : '')

  //checking isFetching here

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    date,
  })

  return axios
    .get(url)
    .then((response) =>
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        date,
        response: response.data,
      })
    )
    .catch((error) =>
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        date,
        message: 'Have an error when fetching todos',
      })
    )
}

// Create+Update+Delete TODOS
export const addTodo = (title, date) => (dispatch) => {
  dispatch({
    type: 'ADD_TODO_REQUEST',
    date,
  })

  return axios
    .post(apiUrl, { title, date })
    .then((response) =>
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: response.data,
        date,
      })
    )
    .catch((error) => console.log('have an error when adding new todo ', error))
}

export const toggleTodo = (id, title, isCompleted, date) => (dispatch) => {
  return axios
    .put(`${apiUrl}/${id}`, { title, isCompleted, date })
    .then((response) => {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: response.data,
        date,
      })
    })
    .catch((error) => console.log('have an error when updating a todo', error))
}

export const removeTodo = (id, date) => (dispatch, getState) => {
  return axios
    .delete(`${apiUrl}/${id}`)
    .then((response) => {
      dispatch({
        type: 'REMOVE_TODO_SUCCESS',
        response: response.data,
        date: getState().selectedDate,
        id,
      })
    })
    .catch((error) => console.log('have an error when removing a todo', error))
}
