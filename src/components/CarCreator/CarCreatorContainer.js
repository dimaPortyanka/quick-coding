import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { parkCar } from 'actions/parking'

import CarCreator from './CarCreator';

export default connect(() => ({}), (dispatch) => bindActionCreators({
  parkCar
}, dispatch))(CarCreator);
