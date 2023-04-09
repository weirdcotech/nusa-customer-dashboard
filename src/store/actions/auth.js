import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, SET_MESSAGE, AGREEMENT_ACCEPTED } from "./types";

import { AuthService } from '@src/services';

export const agreementAccepted = (data) => (dispatch) => {
  console.log("action agreement accepted "  + data.accept)
  dispatch({
    type: AGREEMENT_ACCEPTED,
    payload: data
  })
}

export const loginSuccess = (userData) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: { user: userData.user, isEligible: userData.isEligible },
  });
}

export const loginFailed = (message) => (dispatch) => {
  dispatch({
    type: LOGIN_FAILED,
  });

  dispatch({
    type: SET_MESSAGE,
    payload: message,
  });
}

export const login = (username, password) => (dispatch) => {
  return AuthService.login({ username, password }).then(
    (response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAILED,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  return AuthService.logout().then(
    (response) => {
      localStorage.clear();
      dispatch({
        type: LOGOUT,
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      localStorage.clear();
      
      dispatch({
        type: LOGOUT,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};