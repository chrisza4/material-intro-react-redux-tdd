import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'
import Moment from 'moment'


const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
  {
    text: 'Learn React',
    completed: false,
    id: 1,
    important: true
  },
  {
    text: 'Sleep',
    completed: true,
    id: 2,
    important: true,
    completedDate: Moment('2019-02-15').format('DD MMM YYYY')
  },
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed, completedDate: Moment('2019-02-15').format('DD MMM YYYY') } :
          todo
      )

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked,
        completedDate: Moment('2019-02-15').format('DD MMM YYYY')
      }))

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
