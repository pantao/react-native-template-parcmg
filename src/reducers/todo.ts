import { TAction, TTodos } from '../types'

const initialState: { todos: TTodos } = {
  todos: [],
}

const getInitialState = () => initialState

export const todo = (state = getInitialState(), action: TAction = { type: '' }) => {
  if (action.type === '@@TODOS/ADD') {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: state.todos.length,
          content: action.payload,
        },
      ],
    }
  }

  if (action.type === '@@TODOS/REMOVE') {
    return {
      ...state,
      todos: state.todos
        .filter(({ id }) => id !== action.payload)
        .map(({ content }, id) => ({ id, content })),
    }
  }
  return state
}
