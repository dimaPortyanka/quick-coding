import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { parkCar } from 'actions/parking'

import CarCreator from './CarCreator';

export default connect(({parking: {avalibleForTrucks, avalibleForSpecial, avalibleForSedans}}) => ({
  avalibleForTrucks,
  avalibleForSpecial,
  avalibleForSedans
}), (dispatch) => bindActionCreators({
  parkCar
}, dispatch))(CarCreator);
