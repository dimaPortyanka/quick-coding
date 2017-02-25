import { handleActions } from 'redux-actions';

import { PARK_CAR } from 'actions/parking'

import carTypes from 'utils/carTypes';

const defaultState = {
  freePlaces: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  busyPlaces: [],
  specialPlace: [1, 3, 5],
  truckPlace: [2, 4, 7],
}

export default handleActions({
  [PARK_CAR]: (state, {meta: {type}}) => {
    let apropriateFreePlaces = [];
    if (type === carTypes.truck) {
      apropriateFreePlaces = state.freePlaces.filter((freePlace) => {
        return state.truckPlace.includes(freePlace);
      });
    }

    if (type === carTypes.special) {
      apropriateFreePlaces = state.freePlaces.filter((freePlace) => {
        return state.specialPlace.includes(freePlace);
      })
      // if there is no free places for disabled people we will try to park on any place
      if (!apropriateFreePlaces.length) {
        apropriateFreePlaces = state.freePlaces;
      }
    }

    if (type === carTypes.normal) {
      apropriateFreePlaces = state.freePlaces.filter((freePlace) => {
        return !(state.truckPlace.includes(freePlace) || state.specialPlace.includes(freePlace));
      })

      if (!apropriateFreePlaces.length) {
        apropriateFreePlaces = state.freePlaces.filter((freePlace) => {
          return !state.specialPlace.includes(freePlace)
        })
      }

    }
    // here we can add some logic to chose from free places for example closest to enter or exit or maybe user have some prferens

    const choosenPlace = apropriateFreePlaces[0]; // for example i'll just chose first

    return {
      ...state,
      busyPlaces: [...state.busyPlaces, choosenPlace],
      freePlaces: state.freePlaces.filter((freePlace) => freePlace !== choosenPlace)
    };
  }
}, defaultState);
