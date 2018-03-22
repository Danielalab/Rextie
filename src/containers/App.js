import { connect } from 'react-redux';
import { navigationTo, navigationTran } from '../actions/actions';
import App from '../components/app';

const mapStateToProps = (state) => {
  const { actualPage, infoList } = state.AppReducer;
  return {
    actualPage: actualPage,
    infoList: infoList
  }
};


const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page) => {
    dispatch(navigationTo(page))
  },

  navigationInfo: (info) => {
    dispatch(navigationTran(info))
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(App);