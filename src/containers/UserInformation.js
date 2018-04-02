import { connect } from 'react-redux';
import { loginFirebase, dataUser } from '../actions/actions';
import UserInformation from '../components/UserInformation';

const mapStateToProps = (state) => {
  const { user } = state.AppReducer;
  return {
    user:user
  }
};

export default connect(mapStateToProps)(UserInformation);