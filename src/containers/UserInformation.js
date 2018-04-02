import { connect } from 'react-redux';
import { dataUser } from '../actions/actions';
import UserInformation from '../components/UserInformation';

const mapStateToProps = (state) => {
  const { dataUser } = state.AppReducer;
  return {
    dataUser: dataUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeDataUser: (val, id) => {
    dispatch(dataUser(val, id))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);