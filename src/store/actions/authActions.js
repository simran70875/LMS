// authActions.js

export const loginSuccess = (token, role, userid) => ({
  type: "LOGIN_SUCCESS",
  payload: { token, role, userid },
});

export const logout = () => ({
  type: "LOGOUT",
});
