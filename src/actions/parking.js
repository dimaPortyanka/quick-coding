export const PARK_CAR = 'PARK_CAR';

export function parkCar(car) {
  return {
    type: PARK_CAR,
    meta: car
  };
}
