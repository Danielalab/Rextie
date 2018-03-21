import { connect } from 'react-redux';
import { navigationTo } from '../actions/actions';
import App from '../components/app';

const mapStateToProps = (state) => {
  const { actualPage } = state.AppReducer;
  return {
    actualPage: actualPage,
  }
};


const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page) => {
    dispatch(navigationTo(page))
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(App);