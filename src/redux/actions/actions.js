import {LOGIN, LOGOUT} from './actionTypes';

// export const login = (loginInfo) => {
export const login = () => {
  return {
    type: LOGIN,
    // payload: {
    //   loginInfo,
    // },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
