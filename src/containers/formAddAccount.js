import { connect } from 'react-redux';
import { validateForm, resetButton, getValue } from '../actions/actions';
import AddAccount from '../components/AddAccount';

const mapStateToProps = (state) => {
  const { disabledButton } = state.AppReducer;
  return {
    disabledButton: disabledButton,
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeButton: (disabledButton) => {
    dispatch(validateForm(disabledButton))
  },
  buttonReset: () => {
      dispatch(resetButton())
  },
})

export default connect( mapStateToProps, mapDispatchToProps)(AddAccount);