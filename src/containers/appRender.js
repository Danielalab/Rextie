import { connect } from 'react-redux';
import { loginFirebase, apiUser } from '../actions/actions';
import AppRender from '../components/AppRender';

const mapStateToProps = (state) => {
  const { initialPage, user } = state.AppReducer;
  return {
    initialPage: initialPage,
    user:user
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (initialPage) => {
    dispatch(loginFirebase(initialPage))
  },

  dataFirebaseUser: (user) => {
    dispatch(apiUser(user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRender);