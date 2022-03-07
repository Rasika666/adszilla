import { combineReducers } from "redux";
import {adCreatePageTrackReducer, adCreateReducer} from "./ad-creation-reducer/adCreateReducer";
import {proposalCreateReducer} from "./poposal-creation-reducer/proposalCreateReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
  ads : adCreateReducer,
  currentPage: adCreatePageTrackReducer,
  proposals: proposalCreateReducer,
  users: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>