import { connect } from 'react-redux';
import { loginFirebase, apiUser, dataUser, getDataReniec, getDataFirebase } from '../actions/actions';
import axios from 'axios';
import AppRender from '../components/AppRender';
import firebase from 'firebase';
import { firebaseApp } from '../firebase';

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
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFkZTBiNmZlNjE5MjAzYjdiODkwZGZiOWMwM2IzZTkxMzdiMGUwNzRiOTQxN2Q0Y2IyOTA4NGQzN2JjY2IyMmQwOGRkZTEyZTdmYWFjNGRkIn0.eyJhdWQiOiIxIiwianRpIjoiMWRlMGI2ZmU2MTkyMDNiN2I4OTBkZmI5YzAzYjNlOTEzN2IwZTA3NGI5NDE3ZDRjYjI5MDg0ZDM3YmNjYjIyZDA4ZGRlMTJlN2ZhYWM0ZGQiLCJpYXQiOjE1MjI4MDcyMTMsIm5iZiI6MTUyMjgwNzIxMywiZXhwIjoxNTU0MzQzMjEzLCJzdWIiOiIxNzE2Iiwic2NvcGVzIjpbInVzZS1yZW5pZWMiXX0.VXwnrN-qizZy7iys5q5DcGL3Kq5kzUm9pLXU_YHHrTx5g7yiZcDw9FSEWDrXDTSJfxPiUwj7EgYmwrSbu41XcF5J6ylaCBmLhpLKBRXKhRyHVTUSupTMSw8GGyWGbzNiL7PoBjh-pE9I6Xtq3W4FAm79iqGl_JvEugKL6RRwftNEj4g-z87suQkyFE2VklZ_SLC3dLfkJOYhzzhU6demQCUxPwiCwoUzFnhS3snvuDhBBVh6KlbEyw3EwFTugmzms_rK2ZB3OfZdy1XKkfdy_EZoXktxBForxR71Ae9xXaW3yeLZs-mxtyGocp69j8zWIiIZLKqEueA8nJ0CIkj5W9k4c43AKMzXNviTQebsAceSuDq7pF28O4ef5MAgQZBYSlQLqoK9f8p9SgWyaCCV_ISbnhFJ964IQaVVJPkx6ho5ggCMFck34hooT4qBsLgTE-zMBSszddWWgaeNcDj3mFuf3p5MNQRknQRs00pNARKki8K5fiBTvavP9pUKFIjNDRkbgfTIMBScjsEhGJDMRqeY3kFkMH74j5IsJYEF2TVD3hPfzxCLYxGv7cW4Ud4GWlWvfI41sspmMgNqokpEJKXHPsCtQsVaEzzIAKPhRWdgCqoNEDVrBAEFxW-XbG2yTu9ahPopSkyXpUXK8WuecvP_AZWbZRihdzyPiUghj5s',
        'Accept': 'application/json'
      },
    })   
      .then( response  => { 
        dispatch(getDataReniec(response.data))
      }) 
  },

  getDataUserFirebase: (userId) => {
    let data;
    firebaseApp.database().ref('bd').child(userId).child('account')
          .on('value', function(s) {
            data = s.val();
          });
    console.log(data);     
    // dispatch(getDataFirebase(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppRender);