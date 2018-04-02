import { connect } from 'react-redux';
import { loginFirebase } from '../actions/actions';
import AppRender from '../components/AppRender';

const mapStateToProps = (state) => {
  const { initialPage } = state.AppReducer;
  return {
    initialPage: initialPage
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (initialPage) => {
    dispatch(loginFirebase(initialPage))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRender);