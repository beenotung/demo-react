import React from 'react';
import { useHistory } from 'react-router-dom';
export function Page2() {
  let history = useHistory()
  return (
    <header className="App-header">
      <h1>Page 2</h1>
      <button onClick={e=>history.goBack()}>Back</button>
    </header>
  );
}
