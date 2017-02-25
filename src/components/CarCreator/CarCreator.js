import React from 'react';

import carTypes from 'utils/carTypes';

export default ({parkCar}) => (
  <button onClick={() => {
    parkCar({type: carTypes[Object.keys(carTypes)[Math.floor(Math.random()*3)]]}) // random selection of cartype
  }}>
    parkCar!!!
  </button>
)
