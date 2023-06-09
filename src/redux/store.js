import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

import authReducer from "./auth/reducer";
import notifReducer from "./notif/reducer";
import karyawansReducer from "./karyawans/reducer";
import jabatansReducer from "./jabatans/reducer";
import shiftsReducer from "./shifts/reducer";
import absensisReducer from "./absensis/reducer";
import listsReducer from "./lists/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// global state
const rootReducers = combineReducers({
  auth: authReducer,
  notif: notifReducer,
  karyawans: karyawansReducer,
  jabatans: jabatansReducer,
  shifts: shiftsReducer,
  absensis: absensisReducer,
  lists: listsReducer,
});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
