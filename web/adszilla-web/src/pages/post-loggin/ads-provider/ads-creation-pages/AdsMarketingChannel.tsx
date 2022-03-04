import React, {ChangeEvent, forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {
  adChannelAction,
  setAdCurrentPageAction
} from "../../../../redux/post-loggin/actions/ad-creation-actions/adCreateAction";
import {AdCreatePage} from "../../../../domain/typeDef";
import {useDispatch, useSelector} from "react-redux";
import {AdsMarketingChannel as channel, SocialMediaChannel, WebChannel} from "../../../../domain/ad";
import {RootState} from "../../../../redux/post-loggin/reducers/rootReducer";


interface ICheck {
  socialMedia: SocialMediaChannel,
  web: WebChannel,
};

export interface setAdChannel {
  updateChannel: () => void,
};


const AdsMarketingChannel = forwardRef<setAdChannel, {}>((props, ref) => {
  const dispatch = useDispatch();

  const adChannelState = useSelector((state: RootState) => state.ads.channel);

  const [check, setCheck] = useState<ICheck>({
    socialMedia: adChannelState.channel.socialMediaChannel,
    web: adChannelState.channel.webChannel,
  });

  const {youtube, instagram, facebook, twitter} = check.socialMedia;
  const {gossip, blog, news} = check.web;

  const updateChannel = () => {
    const channel: channel = {
      webChannel: check.web,
      socialMediaChannel: check.socialMedia,
    };
    dispatch(adChannelAction(channel));
  };

  const socialMediaOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck({
      ...check,
      socialMedia: {
        ...check.socialMedia,
        [e.target.name]: e.target.value
      },
    });
  };

  const webOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck({
      ...check,
      web: {
        ...check.web,
        [e.target.name]: e.target.value
      },
    });
  };

  const updateCurrentPage = () => {
    dispatch(setAdCurrentPageAction(AdCreatePage.CHANNEL));
  };


  useEffect(() => {
    updateCurrentPage();
  }, []);

  useImperativeHandle(ref,
      () => ({
        updateChannel: updateChannel
      })
  );


  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">

        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Social Media</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">

            <div className="col-xl-12">
              <div className="row">

                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={youtube}
                                         name="youtube"
                                         onChange={socialMediaOnChange}/>}
                      label=" Youtube Channel"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={facebook}
                                         name="facebook"
                                         onChange={socialMediaOnChange}/>}
                      label=" Facebook Pages"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={instagram}
                                         name="instagram"
                                         onChange={socialMediaOnChange}/>}
                      label=" Instagram page"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={twitter}
                                         name="twitter"
                                         onChange={socialMediaOnChange}/>}
                      label=" Twitter page"/>
                </div>

              </div>

            </div>

          </div>
        </div>

        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i> Web Sites</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-8">
          <div className="row">

            <div className="col-xl-12">
              <div className="row">

                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={gossip}
                                         name="gossip"
                                         onChange={webOnChange}/>}
                      label=" Gossip Site"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={blog}
                                         name="blog"
                                         onChange={webOnChange}/>}
                      label=" Blog"/>
                </div>
                <div className="col-xl-4">
                  <FormControlLabel
                      control={<Checkbox checked={news} name="news"
                                         onChange={webOnChange}/>}
                      label=" News Site"/>
                </div>

              </div>

            </div>

          </div>
        </div>


      </div>
  );
});

export default AdsMarketingChannel;