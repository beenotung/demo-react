import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './Logo.css';

let colorInput = document.createElement('input')

export default function Logo() {
  const [color, setColor] = useState('white')

  useEffect(() => {
    console.log('color:', color)
    colorInput.value = color
    colorInput.dispatchEvent(new Event('change'))

    colorInput.addEventListener("change", handleColorChange)
    return () => {
      colorInput.removeEventListener("change", handleColorChange)
    }
  }, [color])

  function handleColorChange() {
    console.log('changed')
    setColor(colorInput.value)
  }


  return (
    <div className="App-logo-container" >
      <img src={logo} className="App-logo" alt="ionic logo" style={{
        backgroundColor: color
      }}/>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value='white'>White</option>
        <option value='black'>Black</option>
      </select>
    </div>
  );
}
