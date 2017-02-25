import React from 'react';

import carTypes from 'utils/carTypes';

export default ({parkCar, avalibleForTrucks, avalibleForSpecial, avalibleForSedans}) => (
  <button onClick={() => {
    const generatedCar = {type: carTypes[Object.keys(carTypes)[Math.floor(Math.random()*3)]]};
    if (generatedCar.type === carTypes.truck && !avalibleForTrucks)  {
      alert('there is no place for truck!')
      return
    }

    if (generatedCar.type === carTypes.special && !avalibleForSpecial)  {
      alert('there is no place for disabled!')
      return
    }

    if (generatedCar.type === carTypes.normal && !avalibleForSedans)  {
      alert('there is no place for sedans!')
      return
    }

    parkCar({type: carTypes[Object.keys(carTypes)[Math.floor(Math.random()*3)]]}) // random selection of cartype
  }}>
    parkCar!!!
  </button>
)
