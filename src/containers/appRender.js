import { connect } from 'react-redux';
import { loginFirebase, dataUser } from '../actions/actions';
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
    dispatch(dataUser(user))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRender);