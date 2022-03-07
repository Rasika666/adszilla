import {Ad, AdBuilder, AdsBudget, AdsDetails, AdsMarketingChannel, AdsTargetArea} from "../../../../domain/ad";

import {
  CREATE_AD_BUDGET,
  CREATE_AD_CHANNEL,
  CREATE_AD_OVERVIEW,
  CREATE_AD_TARGET_AREA,
  PUBLISH_AD,
  SET_CURRENT_PAGE
} from "../../actions/type";
import {LocalAction, AdPageCreatePayload} from "../../actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import {createNewAdFromState} from "../../../../utils/adCreateUtil";

import { ADS } from "../../../../dummy/data/ads";

type AdOverviewState = {
  overview: AdsDetails,
  isOverviewFinish: boolean,
};

type AdChannelState = {
  channel: AdsMarketingChannel,
  isChannelFinished: boolean,
};

type AdTargetAreaState = {
  targetArea: AdsTargetArea,
  isTargetAreaFinished: boolean,
};

type AdBudgetState = {
  budget: AdsBudget,
  isBudgetFinished: boolean,
};


export type AdState = {
  ads: Ad[],
  currentPage: AdCreatePage | undefined,
  overview: AdOverviewState,
  channel: AdChannelState,
  targetArea: AdTargetAreaState,
  budget: AdBudgetState,
  isAllFinish: boolean,
  isAgreed: boolean,

};

const initState: AdState = {
  ads: ADS,
  currentPage: undefined,

  overview: {
    overview: new AdsDetails(),
    isOverviewFinish: false
  } as AdOverviewState,

  channel: {
    channel: new AdsMarketingChannel(),
    isChannelFinished: false
  } as AdChannelState,

  targetArea:{
    isTargetAreaFinished: false,
    targetArea: new AdsTargetArea(),
  } as AdTargetAreaState,

  budget: {
    isBudgetFinished: false,
    budget: new AdsBudget(),
  } as AdBudgetState,
  isAllFinish: false,
  isAgreed: false,
}

export const adCreateReducer = (state: AdState = initState,
                                action: LocalAction<AdPageCreatePayload>): AdState => {

  switch (action.type) {

    case CREATE_AD_OVERVIEW:
      return {
        ...state,
        overview: {
          overview: action.payload.overview,
          isOverviewFinish: true,
        },
      };

    case CREATE_AD_CHANNEL:
      return {
        ...state,
        channel: {
          channel: action.payload.channel,
          isChannelFinished: true,
        },
      };

    case CREATE_AD_BUDGET:
      return {
        ...state,
        budget: {
          budget: action.payload.budget,
          isBudgetFinished: true
        },
      };

    case CREATE_AD_TARGET_AREA:
      return {
        ...state,
        targetArea: {
          targetArea: action.payload.targetArea,
          isTargetAreaFinished: true
        },
      };

    case PUBLISH_AD:
      if(state.isAgreed && state.isAllFinish) {
        const {overview, budget, targetArea, channel} = state;
        const newAd = createNewAdFromState(overview.overview, channel.channel, targetArea.targetArea, budget.budget);
        return {
          ...state,
          ads: [...state.ads, newAd],
        }
      } else {
        return state;
      }

    default:
      return state;
  }

};

export const adCreatePageTrackReducer = (state: AdState = initState,
                                         action: LocalAction<AdCreatePage>): AdState => {

  switch (action.type) {

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };

    default:
      return state;
  }
  ;

};