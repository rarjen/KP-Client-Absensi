import {
  START_FETCHING_KARYAWANS,
  SUCCESS_FETCHING_KARYAWANS,
  ERROR_FETCHING_KARYAWANS,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchKaryawans = debounce(getData, 1000);

export const startFetchingKaryawans = () => {
  return {
    type: START_FETCHING_KARYAWANS,
  };
};

export const successFetchingKaryawans = ({ karyawans }) => {
  return {
    type: SUCCESS_FETCHING_KARYAWANS,
    karyawans,
  };
};

export const errorFetchingKaryawans = () => {
  return {
    type: ERROR_FETCHING_KARYAWANS,
  };
};

export const fetchKaryawans = () => {
  return async (dispatch) => {
    dispatch(startFetchingKaryawans());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchKaryawans("/karyawan");

      dispatch(
        successFetchingKaryawans({
          karyawans: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingKaryawans());
    }
  };
};
