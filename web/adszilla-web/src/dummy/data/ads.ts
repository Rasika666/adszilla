import { Ad, AdsDetails } from "../../domain/ad";

export const ADS = [
    {
        id: "ad_00000",
        overview: {
            adTitle: "testAdd1",
            adDescription: "testAdd1 Desc",
            adCategory: "testCategoty",
            adTags: [
                { tag: "testAd" },
                { tag: "tag2" }
            ],
            adType: "video",
        },

        channel: {
            socialMediaChannel: {
                youtube: true
            },
        },

        budget: {
            youtubeBudget: 100000,
        },

        targetArea: {
            nearAreas: ["Gampaha"]
        },

    } as Ad,

    {
        id: "ad_00002",
        overview: {
            adTitle: "testAdd2",
            adDescription: "testAdd2 Desc",
            adCategory: "testCategoty",
            adTags: [
                { tag: "testAd" },
            ],
            adType: "video",
        },

        channel: {
            socialMediaChannel: {
                youtube: true
            },
        },

        budget: {
            youtubeBudget: 100000,
        },

        targetArea: {
            nearAreas: ["Ragama"]
        },

    } as Ad,

]