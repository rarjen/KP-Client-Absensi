import {
  ERROR_FETCHING_JABATAN,
  START_FETCHING_JABATAN,
  SUCCESS_FETCHING_JABATAN,
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
    case START_FETCHING_JABATAN:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_JABATAN:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_JABATAN:
      return { ...state, status: statuslist.success, data: action.jabatans };

    default:
      return state;
  }
}
