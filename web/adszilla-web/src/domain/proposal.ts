export interface Proposal {
  id: string;
  adId: string;
  userId: string;
  youtubeInfo: YoutubeInfo;
  proposedBudget: ProposalBudget;
  AdditionInfo: ProposedAdditionInfo;
  createDate: Date,
  deliveryDays: number,
};

interface YoutubeInfo {
  channelName: string;
  totalSubscribers: number;
  channelCategory: string;
  channelUrl: string;
  viewRatesPerDay?: number;
};

interface ProposedAdditionInfo{
  description?: string;
};

interface ProposalBudget{
  budget: number;
}



