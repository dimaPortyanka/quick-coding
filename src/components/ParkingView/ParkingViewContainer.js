import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { parkCar } from 'actions/parking'

import ParkingView from './ParkingView';

export default connect(({parking: {freePlaces, busyPlaces}}) => ({
  freePlaces,
  busyPlaces
}), (dispatch) => bindActionCreators({
  parkCar
}, dispatch))(ParkingView);
