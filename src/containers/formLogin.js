import { connect } from 'react-redux';
import { validateForm, resetButton } from '../actions/actions';
import App from '../components/app';
import Login from '../components/Login';

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

export default connect( mapStateToProps, mapDispatchToProps)(Login);