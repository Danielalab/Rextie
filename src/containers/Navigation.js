import { connect } from 'react-redux';
import { operationClick } from '../actions/actions';
import Navigation from '../components/Navigation';

const mapStateToProps = (state) => {
  const { dataClick } = state.AppReducer;
  return {
    dataClick: dataClick
  }
};

const mapDispatchToProps = (dispatch) => ({
  operationsClick: (id) => {
    dispatch(operationClick(id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);