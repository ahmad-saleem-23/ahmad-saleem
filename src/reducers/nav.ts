import { useReducer } from 'react'

// Define types for state and action
interface State {
  isOpen: boolean
}

interface Action {
  type: string
}

// Define action types
const ActionTypes = {
  TOGGLE_OPEN: 'TOGGLE_OPEN',
}

// Define initial state
const initialState: State = {
  isOpen: false,
}

// Define reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.TOGGLE_OPEN:
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

// Define action creator functions (optional)

export const toggleOpen = (): Action => ({ type: ActionTypes.TOGGLE_OPEN })

export const useGlobalState = () => useReducer(reducer, initialState)
