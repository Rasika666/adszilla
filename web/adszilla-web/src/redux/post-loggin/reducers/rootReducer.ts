import { combineReducers } from "redux";
import {adCreatePageTrackReducer, adCreateReducer} from "./ad-creation-reducer/adCreateReducer";

export const rootReducer = combineReducers({
  ads : adCreateReducer,
  currentPage: adCreatePageTrackReducer,
});

export type RootState = ReturnType<typeof rootReducer>