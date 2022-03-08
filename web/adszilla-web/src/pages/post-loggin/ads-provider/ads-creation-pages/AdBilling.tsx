import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton, IconButtonProps, styled, TextField,
  Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const AdBilling = () => {


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
      <div className="dashboard-box margin-top-30 margin-bottom-30 row d-flex justify-content-center">
        <div className="headline col-xl-12">
          <h3><i className="icon-feather-folder-plus"></i>Budget for Social Media</h3>
        </div>

        <div className="content with-padding padding-bottom-10 col-xl-10">
          <div className="row">

            <div className="col-xl-8 col-lg-8 content-right-offset">
              <h3 className="margin-top-25">Payment Method</h3>

              <div className="payment margin-top-30">
                <div className="payment-tab payment-tab-active">
                  <div className="payment-tab-trigger">
                    <input checked id="paypal" name="cardType" type="radio" value="paypal" />
                      <label htmlFor="paypal">PayPal</label>
                      <img className="payment-logo paypal" src="https://i.imgur.com/ApBxkXU.png" alt="" />
                  </div>
                  <div className="payment-tab-content">
                    <p>You will be redirected to PayPal to complete payment.</p>
                  </div>
                </div>


                <div className="payment-tab">
                  <div className="payment-tab-trigger">
                    <input type="radio" name="cardType" id="creditCart" value="creditCard" />
                      <label htmlFor="creditCart">Credit / Debit Card</label>
                      <img className="payment-logo" src="https://i.imgur.com/IHEKLgm.png" alt="" />
                  </div>

                  <div className="payment-tab-content">

                  </div>
                </div>

              </div>

              <Card>

                <CardActions disableSpacing>

                  <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <div className="row payment-form-row">

                      <div className="col-md-6">
                        <div className="card-label">
                          <TextField label="Cardholder Name" variant="standard"/>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="card-label">
                          <TextField label="Credit Card Number" variant="standard"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card-label">
                          <TextField label="Expiry Month" variant="standard"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card-label">
                          <TextField label="Expiry Year" variant="standard"/>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="card-label">
                          <TextField label="CVV" variant="standard"/>
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Collapse>
              </Card>







            </div>















            <div className="col-xl-4 col-lg-4 margin-top-0 margin-bottom-60">

              <div className="boxed-widget summary margin-top-0">
                <div className="boxed-widget-headline">
                  <h3>Summary</h3>
                </div>
                <div className="boxed-widget-inner">
                  <ul>
                    <li>Standard Plan <span>$49.00</span></li>
                    <li>VAT (20%) <span>$9.80</span></li>
                    <li className="total-costs">Final Price <span>$58.80</span></li>
                  </ul>
                </div>
              </div>

              <div className="checkbox margin-top-30">
                <input type="checkbox" id="two-step" />
                  <label htmlFor="two-step"><span className="checkbox-icon"></span> I agree to the <a href="#">Terms and
                    Conditions</a> and the <a href="#">Automatic Renewal Terms</a></label>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default AdBilling;