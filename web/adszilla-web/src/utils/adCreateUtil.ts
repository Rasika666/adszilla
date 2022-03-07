import {Ad, AdsBudget, AdsDetails, AdsMarketingChannel, AdsTargetArea} from "../domain/ad";

export const createNewAdFromState = (
    overview: AdsDetails,
    channel: AdsMarketingChannel,
    targetArea: AdsTargetArea,
    budget: AdsBudget,
): Ad => {
  return {
    overview,
    channel,
    targetArea,
    budget,
    id: Date.now().toString(),
  } as Ad;
};


export enum UserType {
  AD_PROVIDER,
  AD_BUYER,
  ADMIN,
}