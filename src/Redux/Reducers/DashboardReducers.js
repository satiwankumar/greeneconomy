import * as actionTypes from "../Actions/ActionTypes";

const initState = {
  dashboards: [],
};

const store = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_DASHBOARD:
      return {
        ...state,
        dashboards: state.dashboards.concat(action.payload),
      };
    default:
      return state;
  }
};

export default store;
