import { connect } from 'react-redux';
// import { operation } from '../actions/actions';
import Sell from '../components/Sell';

const mapStateToProps = (state) => {
  const { dataSell } = state.AppReducer;
  return {
    dataSell: dataSell
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   operationBuy: (id) => {
//     dispatch(operation(id))
//   },
// })

export default connect( mapStateToProps)(Sell);