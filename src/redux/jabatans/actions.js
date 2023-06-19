import {
  START_FETCHING_JABATAN,
  SUCCESS_FETCHING_JABATAN,
  ERROR_FETCHING_JABATAN,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/actions";

let debouncedFetchJabatans = debounce(getData, 1000);

export const startFetchingJabatans = () => {
  return {
    type: START_FETCHING_JABATAN,
  };
};

export const successFetchingJabatans = ({ jabatans }) => {
  return {
    type: SUCCESS_FETCHING_JABATAN,
    jabatans,
  };
};

export const errorFetchingJabatans = () => {
  return {
    type: ERROR_FETCHING_JABATAN,
  };
};

export const fetchJabatans = () => {
  return async (dispatch) => {
    dispatch(startFetchingJabatans());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let res = await debouncedFetchJabatans("/jabatan");

      dispatch(
        successFetchingJabatans({
          jabatans: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingJabatans());
    }
  };
};
