import { connect } from 'react-redux';
import { validateForm, resetButton } from '../actions/actions';
import LoginDni from '../components/LoginDni';

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
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(LoginDni);