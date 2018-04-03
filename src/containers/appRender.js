import { connect } from 'react-redux';
import { loginFirebase, apiUser, dataUser, getDataReniec } from '../actions/actions';
import axios from 'axios';
import AppRender from '../components/AppRender';

const mapStateToProps = (state) => {
  const { initialPage, user, dataReniec } = state.AppReducer;
  return {
    initialPage: initialPage,
    user:user,
    dataReniec: dataReniec,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (initialPage) => {
    dispatch(loginFirebase(initialPage))
  },

  dataFirebaseUser: (user) => {
    dispatch(apiUser(user))
  },

  getReniecData: (dni) => {
    axios({
      method: 'POST',
      url: 'https://tecactus.com/api/reniec/dni',
      data: {
        "dni": dni
      },
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk3ZTY1ZWJiNjZlYWQ4MGY0YzUwZGEwMmVlNjk1NTA3OTE4ODgwZjA1N2EwYzAxMzIwZGY5NTZmNzVlZDk5YjAyMzhhMDViOGQ1N2U0YzQ3In0.eyJhdWQiOiIxIiwianRpIjoiOTdlNjVlYmI2NmVhZDgwZjRjNTBkYTAyZWU2OTU1MDc5MTg4ODBmMDU3YTBjMDEzMjBkZjk1NmY3NWVkOTliMDIzOGEwNWI4ZDU3ZTRjNDciLCJpYXQiOjE1MjI2NDg0NDAsIm5iZiI6MTUyMjY0ODQ0MCwiZXhwIjoxNTU0MTg0NDQwLCJzdWIiOiIxNzA5Iiwic2NvcGVzIjpbInVzZS1yZW5pZWMiXX0.nvb76Q2tfypCBK6m2rz_XNH5rwcVrtnyZiHBktWAxRLnfuTteRZbvn45yLcojSI4-ztAlJ4RLu23j7fpeA--DpJ2HNmqK3g8HIiN8jEs5kmY5P9fOZbG3L1fjTmH1esqiGH0UlBgToaIW1kXFNPqNk_P22K64TtcSBrbde4RzHkZL5ifCJpdwFQVDKzQuFBO9sKByWtTEKtIQfeWOOal5pwtxmrIC5Or7gN61-q2a9_nRl7XnXIGCiS6BpXXIIzplVzFqKPvdkw6Hdlvz9S9qBQIxZnS7HhNS4AJqL_WVb5gJVxjLjYowh4LNOujEYw3MPrdDrvoVzoJdAoNCa5ukEqg6q0zUytxJrOFFsBvfdi9ekauvEwGAoH5_ZmGmhWnpbXeomjUOOZ178VlqblXUT0WJyBo9FUpH_Q7lV92EggZpHeI_o9Il7K7zIm8nawpr09_XE_abmmm5e4WVe_XbaD28dI-zEDyzhQ376MHkYPFQTm5JQjFQTIt1Ejl4kigGY7v6wscaU9Bg5i_t2omTEimidJDXNRP4oo79vB0RRXgL3rLOa3MeU6KIfajS3uL54ekR14pwiG6DCQBZ4gZRf8B0WzPkXzJ5bWad1X50YnFmZKCWfGqtgXOvgRjG0EBuZWIR1QJvi8aS0B0gJSXzORKOgMqV9M3h3J2wlUlftc',
        'Accept': 'application/json'
      },
    })   
      .then( response  => { 
        dispatch(getDataReniec(response.data))
      }) 
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRender);