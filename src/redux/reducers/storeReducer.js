import {LOGIN, LOGOUT} from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  id: '',
  name: '',
  phone: '',
  display: '',
  about: '',
  contacts: '',
  chats: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGOUT: {
      return initialState;
    }
    case LOGIN: {
      return Object.assign({}, state, {isLoggedIn: true, ...action.payload});
    }
    default:
      return Object.assign({}, state);
  }
}
