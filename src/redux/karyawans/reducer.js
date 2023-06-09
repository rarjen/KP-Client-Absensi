import {
  ERROR_FETCHING_KARYAWAN,
  START_FETCHING_KARYAWAN,
  SUCCESS_FETCHING_KARYAWAN,
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
    case START_FETCHING_KARYAWAN:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_KARYAWAN:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_KARYAWAN:
      return { ...state, status: statuslist.success, data: action.karyawans };

    default:
      return state;
  }
}
