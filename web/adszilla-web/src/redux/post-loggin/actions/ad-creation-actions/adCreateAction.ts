import {AdsBudget, AdsDetails, AdsMarketingChannel, AdsTargetArea} from "../../../../domain/ad";
import {CREATE_AD_CHANNEL, CREATE_AD_OVERVIEW, SET_CURRENT_PAGE} from "../type";
import {AdCreatePage} from "../../../../domain/typeDef";

export interface AdPageCreatePayload {
  overview: AdsDetails,
  channel: AdsMarketingChannel,
  targetArea: AdsTargetArea,
  budget: AdsBudget,
}

export type AdAction<T> = {
  type: string,
  payload: T
};


export const adOverviewAction = (adOverview: AdsDetails): AdAction<AdPageCreatePayload> => {

  const payload: AdPageCreatePayload = {
    overview: adOverview,
    channel: {} as AdsMarketingChannel,
    targetArea: {} as AdsTargetArea,
    budget: {} as AdsBudget
  }

  return {
    type: CREATE_AD_OVERVIEW,
    payload:payload
  };
};

export const setAdCurrentPageAction = (currentPage: AdCreatePage): AdAction<AdCreatePage> => {
  return {
    type: SET_CURRENT_PAGE,
    payload:currentPage
  };
};

export const adChannelAction = (channel: AdsMarketingChannel): AdAction<AdPageCreatePayload> => {
  const payload: AdPageCreatePayload = {
    overview: {} as AdsDetails,
    channel: channel,
    targetArea: {} as AdsTargetArea,
    budget: {} as AdsBudget
  };

  return {
    type: CREATE_AD_CHANNEL,
    payload:payload
  };

};



