import React from 'react';

function TemperatureConverter({ temperature, scale }) {
  const convertTemperature = (temp, scale) => {
    if (scale === 'C') {
      return (temp * 9 / 5) + 32; 
    } else if (scale === 'F') {
      return (temp - 32) * 5 / 9; 
    }
    return temp;
  };

  const convertedTemperature = convertTemperature(temperature, scale);

  const displayScale = scale === 'C' ? 'F' : 'C';

  return (
    <div>
      <p>{temperature}°{scale} is equal to {convertedTemperature}°{displayScale}</p>
    </div>
  );
}

export default TemperatureConverter;
