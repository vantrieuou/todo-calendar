import axios from 'axios'
import { getTodo } from '../reducers/byId'

const apiUrl = 'http://localhost:3001/todos'

// FILTER & FETCH TODOS
export const fetchTodos = (date) => (dispatch, getState) => {
  const url = apiUrl + (date !== 'all' ? `/?date=${date}` : '')

  //checking isFetching here

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    date,
  })

  return axios
    .get(url, { timeout: 1000 })
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
        date: date,
      })
    )
    .catch((error) => console.log('have an error when adding new todo ', error))
}

export const toggleTodo = (id) => (dispatch, getState) => {
  const { title, isCompleted, date } = getTodo(getState().byId, id)

  return axios
    .put(`${apiUrl}/${id}`, { title, isCompleted: !isCompleted, date })
    .then((response) => {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        response: response.data,
      })
    })
    .catch((error) => console.log('have an error when updating a todo', error))
}

export const removeTodo = (id) => (dispatch, getState) => {
  return axios
    .delete(`${apiUrl}/${id}`)
    .then((response) => {
      dispatch({
        type: 'REMOVE_TODO_SUCCESS',
        response: response.data,
        id,
      })
    })
    .catch((error) => console.log('have an error when removing a todo', error))
}
