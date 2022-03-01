export interface Ad {
  overview: AdsDetails;
  channel: AdsMarketingChannel;
  targetArea: AdsTargetArea;
  budget: AdsBudget;
}

enum AdType {
  Video,
  Banner,
}

export interface AdsDetails {
  adTitle: string;
  adType: AdType;
  adCategory: string[];
  adDescription: string;
}

export interface AdsMarketingChannel {
  channel: string;
}

export interface AdsTargetArea {
  areas: string[];
}

export interface AdsBudget {
  budgetPerView: number;
  budgetPerDuration: number;
}