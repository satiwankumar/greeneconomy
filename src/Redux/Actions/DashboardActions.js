import * as actionTypes from "./ActionTypes";
export const createDashboard = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CREATE_DASHBOARD,
      payload: data,
    });
  };
};
