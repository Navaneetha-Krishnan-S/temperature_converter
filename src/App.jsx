import React, { useState } from 'react';
import TemperatureConverter from './TemperatureConverter';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('C');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <h4>by Navaneetha Krishnan S</h4>
      <input 
        type="number" 
        value={temperature} 
        onChange={handleTemperatureChange} 
        placeholder="Enter temperature" 
      />
      <select value={scale} onChange={handleScaleChange}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      {temperature !== '' && (
        <TemperatureConverter temperature={parseFloat(temperature)} scale={scale} />
      )}
    </div>
  );
}

export default App;
