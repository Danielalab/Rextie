import { connect } from 'react-redux';
// import { operation } from '../actions/actions';
import Buy from '../components/Buy';

const mapStateToProps = (state) => {
  const { dataBuy } = state.AppReducer;
  return {
    dataBuy: dataBuy
  }
};

// const mapDispatchToProps = (dispatch) => ({
//   operationBuy: (id) => {
//     dispatch(operation(id))
//   },
// })

export default connect( mapStateToProps)(Buy);