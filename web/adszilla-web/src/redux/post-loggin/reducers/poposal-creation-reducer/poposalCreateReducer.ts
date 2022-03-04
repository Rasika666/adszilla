import {Poposal} from "../../../../domain/poposal";

import {CREATE_POPOSAL_OVERVIEW, SET_CURRENT_PAGE} from "../../actions/type";
import {AdAction, AdPageCreatePayload} from "../../actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";

import { POPOSALS } from "../../../../domain/data/poposals";
import { PoposalAction } from "../../actions/poposal-creation-actions/poposalCreateAction";


export type PoposalState = {
  poposals: Poposal[]
};

const initState: PoposalState = {
  poposals: POPOSALS,
}



export const poposalCreateReducer = (state: PoposalState = initState,
                                action: PoposalAction<AdPageCreatePayload>): PoposalState => {

  switch (action.type) {

    case CREATE_POPOSAL_OVERVIEW:
      return {
        ...state,
      };

    default: return state;
  }

};


export const adCreatePageTrackReducer = (state: PoposalState = initState,
                                         action: PoposalAction<AdCreatePage>): PoposalState =>{

  switch (action.type) {

    case SET_CURRENT_PAGE:
      return {
        ...state,
        };

    default: return state;
  };

};