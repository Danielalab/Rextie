import { connect } from 'react-redux';
import { operationClick, getValue, getValueDestination, getValueOrigen } from '../actions/actions';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
  const { dataClick, dataSend, dataSend1, dataDestination } = state.AppReducer;
  return {
    dataClick: dataClick,
    dataSend: dataSend,
    dataSend1: dataSend1,
    dataDestination: dataDestination
  }
};

const mapDispatchToProps = (dispatch) => ({
  operationsClick: (id) => {
    dispatch(operationClick(id))
  },
  getValue: (val) => {
    dispatch(getValue(val))
  },
  getValueDestination: (val) => {
    dispatch(getValueDestination(val))
  },
  getValueOrigen: (val) => {
    dispatch(getValueOrigen(val))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);