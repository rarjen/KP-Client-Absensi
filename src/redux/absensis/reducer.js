import {
  ERROR_FETCHING_ABSENSI,
  START_FETCHING_ABSENSI,
  SUCCESS_FETCHING_ABSENSI,
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
    case START_FETCHING_ABSENSI:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_ABSENSI:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_ABSENSI:
      return { ...state, status: statuslist.success, data: action.absensis };

    default:
      return state;
  }
}
