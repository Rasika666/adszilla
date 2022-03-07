import { Ad, AdsDetails } from "../ad";

export const ADS = [
    {
        id : "ad_00000",
        overview: {
            adTitle: "testAdd1",
            adDescription: "testAdd1 Desc",
            adCategory: "testCategoty",
            adTags: [
                {tag: "testAd"},
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
        }
        
    } as Ad,
    
]