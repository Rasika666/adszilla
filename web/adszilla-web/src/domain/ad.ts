export interface Ad {
  id: string ;
  overview: AdsDetails;
  channel: AdsMarketingChannel;
  targetArea: AdsTargetArea;
  budget: AdsBudget ;
};


export class AdBuilder{

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

};

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


export class AdsMarketingChannel {
  socialMediaChannel: SocialMediaChannel = new SocialMediaChannel();
  webChannel: WebChannel = new WebChannel();
}

export interface Channel {};

export class SocialMediaChannel implements Channel{
  youtube: boolean = false;
  facebook: boolean = false;
  instagram: boolean = false;
  twitter: boolean = false;
};

export class WebChannel implements Channel{
  gossip: boolean = false;
  blog: boolean = false;
  news: boolean = false;
};

export class AdsTargetArea {
  latLng: google.maps.LatLng[] = [];
  nearAreas: string[] = []
}

export class AdsBudget {
  youtubeBudget: number | null = null;
  instagramBudget: number | null= null;
  twitterBudget: number | null= null;
  facebookBudget: number | null = null;
}