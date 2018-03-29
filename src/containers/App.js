import { connect } from 'react-redux';
import { navigationTo, navigationTran, navigationTranHis } from '../actions/actions';
import App from '../components/app';

const mapStateToProps = (state) => {
  const { actualPage, infoList, infoHis } = state.AppReducer;
  return {
    actualPage: actualPage,
    infoList: infoList,
    infoHis: infoHis
  }
};

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page) => {
    dispatch(navigationTo(page))
  },

  navigationInfo: (info) => {
    dispatch(navigationTran(info))
  },

  navigationHis: (his) => {
    dispatch(navigationTranHis(his))
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(App);