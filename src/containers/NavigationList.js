import { connect } from 'react-redux';
import { operation, operationsReverse } from '../actions/actions';
import NavigationList from '../components/NavigationList';

const mapStateToProps = (state) => {
  const { dataBuySell} = state.AppReducer;
  return {
    dataBuySell: dataBuySell,
  }
};

const mapDispatchToProps = (dispatch) => ({
  operations: (val, id) => {
    dispatch(operation(val, id))
  },

  operationsReverse: (val, id) => {
    dispatch(operationsReverse(val, id))
  },
})

export default connect( mapStateToProps, mapDispatchToProps)(NavigationList);