import {
  START_FETCHING_ABSENSI,
  SUCCESS_FETCHING_ABSENSI,
  ERROR_FETCHING_ABSENSI,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchAbsensis = debounce(getData, 1000);

export const startFetchingAbsensis = () => {
  return {
    type: START_FETCHING_ABSENSI,
  };
};

export const successFetchingAbsensis = ({ absensis }) => {
  return {
    type: SUCCESS_FETCHING_ABSENSI,
    absensis,
  };
};

export const errorFetchingAbsensis = () => {
  return {
    type: ERROR_FETCHING_ABSENSI,
  };
};

export const fetchAbsensis = () => {
  return async (dispatch) => {
    dispatch(startFetchingAbsensis());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchAbsensis("/absensi/getAbsen");

      dispatch(
        successFetchingAbsensis({
          absensis: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingAbsensis());
    }
  };
};
