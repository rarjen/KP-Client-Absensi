import {
  START_FETCHING_SHIFT,
  SUCCESS_FETCHING_SHIFT,
  ERROR_FETCHING_SHIFT,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchShifts = debounce(getData, 1000);

export const startFetchingShifts = () => {
  return {
    type: START_FETCHING_SHIFT,
  };
};

export const successFetchingShifts = ({ shifts }) => {
  return {
    type: SUCCESS_FETCHING_SHIFT,
    shifts,
  };
};

export const errorFetchingShifts = () => {
  return {
    type: ERROR_FETCHING_SHIFT,
  };
};

export const fetchShifts = () => {
  return async (dispatch) => {
    dispatch(startFetchingShifts());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchShifts("/shift");

      dispatch(
        successFetchingShifts({
          shifts: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingShifts());
    }
  };
};
