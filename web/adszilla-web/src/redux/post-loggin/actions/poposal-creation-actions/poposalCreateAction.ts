import {AdsBudget, AdsDetails, AdsMarketingChannel, AdsTargetArea} from "../../../../domain/ad";
import {CREATE_AD_OVERVIEW, SET_CURRENT_PAGE} from "../type";
import {AdCreatePage} from "../../../../domain/typeDef";
import { PoposalsDetails } from "../../../../domain/poposal";

export interface PoposalPageCreatePayload {
  id: string,
  userId: string,
  channel: string,
  targetArea: string,
  budget: number,
  delivryTime: string,
}

export type PoposalAction<T> = {
  type: string,
  payload: T
};


export const adOverviewAction = (poposalOverview: PoposalsDetails): PoposalAction<PoposalPageCreatePayload> => {

  const payload: PoposalPageCreatePayload = {
    userId: poposalOverview.userId,
    budget: poposalOverview.budget,
    channel: poposalOverview.channel,
    id: poposalOverview.id,
    targetArea: poposalOverview.targetArea,
    delivryTime: poposalOverview.delivryTime
  }

  return {
    type: CREATE_AD_OVERVIEW,
    payload:payload
  };
};

export const setAdCurrentPageAction = (currentPage: AdCreatePage): PoposalAction<AdCreatePage> => {
  return {
    type: SET_CURRENT_PAGE,
    payload:currentPage
  };
}



