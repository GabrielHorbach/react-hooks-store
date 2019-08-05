import React, { createContext } from 'react'

export const Store = createContext();

const initialState = {
  language: "EN",
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>
}