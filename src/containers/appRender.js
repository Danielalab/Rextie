import { connect } from 'react-redux';
import AppRender from '../components/AppRender';

const mapStateToProps = (state) => {
  const { user } = state.AppReducer;
  return {
    user: user
  }
};

export default connect(mapStateToProps)(AppRender);