import {Proposal} from "../../domain/proposal";

export const proposal = [
  {
    id: "prop_0000",
    adId: "ad_00000",
    userId: "user_0000",
    proposedBudget: {
      budget: 100000.00
    },
    youtubeInfo: {
      channelName: "channel1",
      channelUrl: "https://youtube.com",
      channelCategory: "Game",
      viewRatesPerDay: 10,
      totalSubscribers: 25000
    },
    AdditionInfo: {
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    createDate: new Date('2022-01-25'),
    deliveryDays: 8,
  } as Proposal,
  {
    id: "prop_0001",
    adId: "ad_00000",
    userId: "user_0000",
    proposedBudget: {
      budget: 105070.00
    },
    youtubeInfo: {
      channelName: "channel2",
      channelUrl: "https://youtube.com",
      channelCategory: "Fashion",
      viewRatesPerDay: 100,
      totalSubscribers: 25000000
    },
    AdditionInfo: {
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    createDate: new Date('2022-01-27'),
    deliveryDays: 5,
  } as Proposal,
  {
    id: "prop_0003",
    adId: "ad_00002",
    userId: "user_0001",
    proposedBudget: {
      budget: 25000.00
    },
    youtubeInfo: {
      channelName: "channel1",
      channelUrl: "https://youtube.com",
      channelCategory: "Education",
      viewRatesPerDay: 10,
      totalSubscribers: 5000
    },
    AdditionInfo: {
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
    },
    createDate: new Date('2022-01-30'),
    deliveryDays: 10
  } as Proposal,

]