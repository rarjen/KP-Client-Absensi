import {
  START_FETCHING_LISTS_JABATANS,
  SUCCESS_FETCHING_LISTS_JABATANS,
  ERROR_FETCHING_LISTS_JABATANS,
  START_FETCHING_LISTS_SHIFTS,
  SUCCESS_FETCHING_LISTS_SHIFTS,
  ERROR_FETCHING_LISTS_SHIFTS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  jabatans: [],
  statusJabatans: statuslist.idle,
  shifts: [],
  statusShifts: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_LISTS_JABATANS:
      return { ...state, statusJabatans: statuslist.process };

    case ERROR_FETCHING_LISTS_JABATANS:
      return { ...state, statusJabatans: statuslist.error };

    case SUCCESS_FETCHING_LISTS_JABATANS:
      return {
        ...state,
        statusJabatans: statuslist.success,
        jabatans: action.jabatans,
      };

    case START_FETCHING_LISTS_SHIFTS:
      return { ...state, statusShifts: statuslist.process };

    case ERROR_FETCHING_LISTS_SHIFTS:
      return { ...state, statusShifts: statuslist.error };

    case SUCCESS_FETCHING_LISTS_SHIFTS:
      return {
        ...state,
        statusShifts: statuslist.success,
        shifts: action.shifts,
      };

    default:
      return state;
  }
}
