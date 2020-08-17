import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export function Page1() {
  let [destination, setDestination] = useState('/');
  let history = useHistory();
  return (
    <header className="App-header">
      <h1>Page 1</h1>
      <label>Destination</label>
      <input
        value={destination}
        onChange={e => setDestination(e.target.value)}
      />
      <button
        onClick={e => {
          history.push(destination);
        }}
      >
        Go
      </button>
    </header>
  );
}
