import React from 'react';
import { Store } from './Store';

export default function App(props) {
  const { state, dispatch } = React.useContext(Store);

  const toggleLanguage = (event) => {
    let dispatchObj = {
      type: 'TOGGLE_LANGUAGE',
      payload: event.target.value
    };
    return dispatch(dispatchObj);
  }

  return (
    <>
      {console.log(state)}
      <select name="aa" id="lang" onChange={toggleLanguage}>
        <option value="EN">Inglês</option>
        <option value="PT">Português</option>
      </select>
    </>
  );
}