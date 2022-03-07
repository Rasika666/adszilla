import {CREATE_POPOSAL_OVERVIEW} from "../../actions/type";
import {AdPageCreatePayload, LocalAction} from "../../actions/ad-creation-actions/adCreateAction";
import {proposal} from "../../../../dummy/data/poposals";
import {Proposal} from "../../../../domain/proposal";


export type ProposalState = {
  proposals: Proposal[]
};

const initState: ProposalState = {
  proposals: proposal,
}


export const proposalCreateReducer = (state: ProposalState = initState,
                                      action: LocalAction<AdPageCreatePayload>): ProposalState => {

  switch (action.type) {
    case CREATE_POPOSAL_OVERVIEW:
      return {
        ...state,
      };

    default:
      return state;
  }


};