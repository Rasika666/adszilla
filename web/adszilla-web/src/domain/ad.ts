export interface Ad {
  id: string ;
  overview: AdsDetails;
  channel: AdsMarketingChannel;
  targetArea: AdsTargetArea;
  budget: AdsBudget ;
}


export class AdBuilder {

  private readonly _ad: Ad;

  constructor(id: string) {
    this._ad = {
      id,
      overview: {} as AdsDetails,
      targetArea: {} as AdsTargetArea,
      budget: {} as AdsBudget,
      channel: {} as AdsMarketingChannel,
    }
  }

  overview(overview: AdsDetails): AdBuilder {
    this._ad.overview = overview;
    return this;
  }

  targetArea(targetArea: AdsTargetArea): AdBuilder {
    this._ad.targetArea = targetArea;
    return this;
  }

  budget(budget: AdsBudget): AdBuilder {
    this._ad.budget = budget;
    return this;
  }

  channel(channel: AdsMarketingChannel): AdBuilder {
    this._ad.channel = channel;
    return this;
  }

}

export enum AdType {
  Video = "Video",
  Banner = "Banner",
}

export class AdsDetails {
  adTitle: string = "";
  adType: string = "";
  adCategory: string = "";
  adDescription: string = "";
  adTags: Tag[] = []
}

export interface Tag {
  tag: string
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