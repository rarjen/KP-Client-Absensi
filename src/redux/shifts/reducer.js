import {
  ERROR_FETCHING_SHIFT,
  START_FETCHING_SHIFT,
  SUCCESS_FETCHING_SHIFT,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SHIFT:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_SHIFT:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_SHIFT:
      return { ...state, status: statuslist.success, data: action.shifts };

    default:
      return state;
  }
}
