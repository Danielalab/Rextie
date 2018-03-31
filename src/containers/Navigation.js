import { connect } from 'react-redux';
import { operationClick } from '../actions/actions';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
  const { dataBuySell } = state.AppReducer;
  return {
    dataBuySell: dataBuySell
  }
};

const mapDispatchToProps = (dispatch) => ({
  operationsClick: (id) => {
    dispatch(operationClick(id))
  },
})

export default connect( mapStateToProps)(Navigation);