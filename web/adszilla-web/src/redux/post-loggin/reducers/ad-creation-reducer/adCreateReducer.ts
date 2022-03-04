import {Ad, AdsBudget, AdsDetails, AdsMarketingChannel, AdsTargetArea} from "../../../../domain/ad";

import {CREATE_AD_CHANNEL, CREATE_AD_OVERVIEW, SET_CURRENT_PAGE} from "../../actions/type";
import {AdAction, AdPageCreatePayload} from "../../actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";

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

};

const initState: AdState = {
  ads: [],
  currentPage: undefined,
  overview: <AdOverviewState>{
    overview: new AdsDetails(),
    isOverviewFinish: false
  },
  channel: <AdChannelState>{
    channel: new AdsMarketingChannel(),
    isChannelFinished: false
  },
  targetArea: <AdTargetAreaState>{
    isTargetAreaFinished: false,
    targetArea: <AdsTargetArea>{}
  },
  budget: <AdBudgetState>{
    isBudgetFinished: false,
    budget: <AdsBudget>{}
  },
  isAllFinish: false,
}



export const adCreateReducer = (state: AdState = initState,
                                action: AdAction<AdPageCreatePayload>): AdState => {

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
        }

      }

    default: return state;
  }

};

export const adCreatePageTrackReducer = (state: AdState = initState,
                                         action: AdAction<AdCreatePage>): AdState =>{

  switch (action.type) {

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
        };

    default: return state;
  };

};