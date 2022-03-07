import { combineReducers } from "redux";
import {adCreatePageTrackReducer, adCreateReducer} from "./ad-creation-reducer/adCreateReducer";
import {poposalCreateReducer} from "./poposal-creation-reducer/poposalCreateReducer";

export const rootReducer = combineReducers({
  ads : adCreateReducer,
  currentPage: adCreatePageTrackReducer,
  poposals: poposalCreateReducer,
});

export type RootState = ReturnType<typeof rootReducer>