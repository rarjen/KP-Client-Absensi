import {
  START_FETCHING_KARYAWAN,
  SUCCESS_FETCHING_KARYAWAN,
  ERROR_FETCHING_KARYAWAN,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchKaryawans = debounce(getData, 1000);

export const startFetchingKaryawans = () => {
  return {
    type: START_FETCHING_KARYAWAN,
  };
};

export const successFetchingKaryawans = ({ karyawans }) => {
  return {
    type: SUCCESS_FETCHING_KARYAWAN,
    karyawans,
  };
};

export const errorFetchingKaryawans = () => {
  return {
    type: ERROR_FETCHING_KARYAWAN,
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
