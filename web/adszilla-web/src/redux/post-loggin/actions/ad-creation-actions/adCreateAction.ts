import {AdsBudget, AdsDetails, AdsMarketingChannel, AdsTargetArea} from "../../../../domain/ad";
import {
  CREATE_AD_BUDGET,
  CREATE_AD_CHANNEL,
  CREATE_AD_OVERVIEW,
  CREATE_AD_TARGET_AREA,
  SET_CURRENT_PAGE
} from "../type";
import {AdCreatePage} from "../../../../domain/typeDef";

export interface AdPageCreatePayload {
  overview: AdsDetails,
  channel: AdsMarketingChannel,
  targetArea: AdsTargetArea,
  budget: AdsBudget,
}

export type LocalAction<T> = {
  type: string,
  payload: T
};


export const adOverviewAction = (adOverview: AdsDetails): LocalAction<AdPageCreatePayload> => {

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

export const setAdCurrentPageAction = (currentPage: AdCreatePage): LocalAction<AdCreatePage> => {
  return {
    type: SET_CURRENT_PAGE,
    payload:currentPage
  };
};

export const adChannelAction = (channel: AdsMarketingChannel): LocalAction<AdPageCreatePayload> => {
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


export const adBudgetAction = (budget: AdsBudget): LocalAction<AdPageCreatePayload> => {
  const payload: AdPageCreatePayload = {
    overview: {} as AdsDetails,
    channel: {} as AdsMarketingChannel,
    targetArea: {} as AdsTargetArea,
    budget: budget
  };

  return {
    type: CREATE_AD_BUDGET,
    payload:payload
  };
};

export const adTargetAreaAction = (targetArea: AdsTargetArea): LocalAction<AdPageCreatePayload> => {
  const payload: AdPageCreatePayload = {
    overview: {} as AdsDetails,
    channel: {} as AdsMarketingChannel,
    targetArea: targetArea,
    budget: {} as AdsBudget
  };

  return {
    type: CREATE_AD_TARGET_AREA,
    payload:payload
  };

};



