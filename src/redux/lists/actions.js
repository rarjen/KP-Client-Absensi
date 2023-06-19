import {
  START_FETCHING_LISTS_JABATANS,
  SUCCESS_FETCHING_LISTS_JABATANS,
  ERROR_FETCHING_LISTS_JABATANS,
  START_FETCHING_LISTS_SHIFTS,
  ERROR_FETCHING_LISTS_SHIFTS,
  SUCCESS_FETCHING_LISTS_SHIFTS,
  START_FETCHING_LISTS_KARYAWANS,
  SUCCESS_FETCHING_LISTS_KARYAWANS,
  ERROR_FETCHING_LISTS_KARYAWANS,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";

let debouncedFetchListsJabatans = debounce(getData, 1000);
let debouncedFetchListsShifts = debounce(getData, 1000);
let debouncedFetchListsKaryawans = debounce(getData, 1000);

// Jabatan

export const startFetchingListsJabatans = () => {
  return {
    type: START_FETCHING_LISTS_JABATANS,
  };
};

export const successFetchingListJabatans = ({ jabatans }) => {
  return {
    type: SUCCESS_FETCHING_LISTS_JABATANS,
    jabatans,
  };
};

export const errorFetchingListJabatans = () => {
  return {
    type: ERROR_FETCHING_LISTS_JABATANS,
  };
};

export const fetchListJabatans = () => {
  return async (dispatch) => {
    dispatch(startFetchingListsJabatans());

    try {
      let res = await debouncedFetchListsJabatans("/jabatan");

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res.id,
          label: res.jabatan,
          target: { value: res.id, name: "jabatan" },
        });
      });

      dispatch(
        successFetchingListJabatans({
          jabatans: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListJabatans());
    }
  };
};

// Shift
export const startFetchingListsShifts = () => {
  return {
    type: START_FETCHING_LISTS_SHIFTS,
  };
};

export const successFetchingListShifts = ({ shifts }) => {
  return {
    type: SUCCESS_FETCHING_LISTS_SHIFTS,
    shifts,
  };
};

export const errorFetchingListShifts = () => {
  return {
    type: ERROR_FETCHING_LISTS_SHIFTS,
  };
};

export const fetchListShifts = () => {
  return async (dispatch) => {
    dispatch(startFetchingListsShifts());

    try {
      let res = await debouncedFetchListsShifts("/shift");

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res.id,
          label: res.shift,
          target: { value: res.id, name: "shift" },
        });
      });

      dispatch(
        successFetchingListShifts({
          shifts: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListShifts());
    }
  };
};

// Karyawans

export const startFetchingListsKaryawans = () => {
  return {
    type: START_FETCHING_LISTS_KARYAWANS,
  };
};

export const successFetchingListKaryawans = ({ karyawans }) => {
  return {
    type: SUCCESS_FETCHING_LISTS_KARYAWANS,
    karyawans,
  };
};

export const errorFetchingListKaryawans = () => {
  return {
    type: ERROR_FETCHING_LISTS_KARYAWANS,
  };
};

export const fetchListKaryawans = () => {
  return async (dispatch) => {
    dispatch(startFetchingListsKaryawans());

    try {
      let res = await debouncedFetchListsKaryawans("/karyawan");

      let _temp = [];

      res.data.data.forEach((res) => {
        _temp.push({
          value: res.id,
          label: res.full_name,
          target: { value: res.id, name: "karyawan" },
        });
      });

      dispatch(
        successFetchingListKaryawans({
          karyawans: _temp,
        })
      );
    } catch (error) {
      dispatch(errorFetchingListKaryawans());
    }
  };
};
