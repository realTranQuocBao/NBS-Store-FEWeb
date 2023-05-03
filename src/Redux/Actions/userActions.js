import { toast } from "react-toastify";
import { request } from "../../utils/request";
import {
  USER_CONFIRM_REGISTER_FAIL,
  USER_CONFIRM_REGISTER_REQUEST,
  USER_CONFIRM_REGISTER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_AVATAR_FAIL,
  USER_UPDATE_AVATAR_REQUEST,
  USER_UPDATE_AVATAR_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS
} from "../Constants/userConstants";
const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: true,
  autoClose: 2000
};
// ADMIN LOGIN
export const adminLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const { data } = await request.post(`/api/v1/user/login`, { email, password }, config);

    if (!data.isAdmin === true) {
      toast.error("You are not Admin", ToastObjects);
      dispatch({
        type: USER_LOGIN_FAIL
      });
    } else {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    }

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message
    });
  }
};

// USER LOGIN
export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const { data } = await request.post(`/api/v1/user/login`, { email, password }, config);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    });
  }
};

// LOGOUT USER
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  // dispatch({ type: USER_LIST_RESET });
  document.location.href = "/login";
  // localStorage.setItem("cartItems", JSON.stringify([]));
};

// REGISTER
export const userRegisterAction = (name, email, password, history) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    await request.post(`/api/v1/user`, { name, email, password }, config);
    dispatch({ type: USER_REGISTER_SUCCESS });
    // dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    // localStorage.setItem("userInfo", JSON.stringify(data));
    toast.error("Account verification successful.", ToastObjects);

    setTimeout(() => {
      history.push(`/verify-email?email=${email}`);
    }, 2000);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: message
    });
    toast.error(message, ToastObjects);
  }
};
// CONFIRM REGISTER
export const userConfirmRegisterAction = (tokenVerification, history) => async (dispatch) => {
  try {
    dispatch({ type: USER_CONFIRM_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const { data } = await request.patch(
      `/api/v1/user/verify-email?emailVerificationToken=${tokenVerification}`,
      config
    );

    dispatch({ type: USER_CONFIRM_REGISTER_SUCCESS, payload: data });
    toast.success("Register account success!", ToastObjects);
    history.push("/login");
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    toast.error(message, ToastObjects);

    dispatch({ type: USER_CONFIRM_REGISTER_FAIL, payload: message });
  }
};
// CANCEL CONFIRM REGISTER
export const userCancelRegisterAction = (tokenVerification, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    await request.patch(`/api/v1/user/cancel-verify-email?emailVerificationToken=${tokenVerification}`, config);
    toast.success("Cancel register account success!", ToastObjects);
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    toast.error(message, ToastObjects);
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  }
};
// SHOW USER DETAILS SCREEN
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/user/${id}`, config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message
    });
  }
};

// UPDATE PROFILE USER
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.put(`/api/v1/user/profile`, user, config);
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message
    });
  }
};

// UPDATE AVATAR USER
export const updateUserAvatar =
  ({ user, formData }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_AVATAR_REQUEST });

      const {
        userLogin: { userInfo }
      } = getState();

      const config = {
        headers: {
          // "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`
        }
      };

      const { data } = await request.post(`/api/v1/user/CreateOrUpdateAvatar/${user._id}`, formData, config);
      dispatch({ type: USER_UPDATE_AVATAR_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_UPDATE_AVATAR_FAIL,
        payload: message
      });
    }
  };

// ALL USER
export const listUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await request.get(`/api/v1/user`, config);

    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message
    });
  }
};
