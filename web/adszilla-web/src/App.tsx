import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/post-loggin/Home";
import DashboardV2 from "./pages/post-loggin/ads-buyer/DashboardV2";
import AdsCreation from "./pages/post-loggin/ads-provider/AdsCreation";
import MyAdDashboard from "./pages/post-loggin/ads-provider/MyAdDashboard";
import AdDetails from "./pages/common/AdDetails";
import AdBuyerDashboard from "./pages/post-loggin/ads-buyer/AdBuyerDashboard";
import {UserType} from "./utils/adCreateUtil";
import AdProposalForm from "./pages/post-loggin/ads-buyer/AdProposalForm";

import AdsProposal from "./pages/common/AdsProposal";
import ProposalDetails from "./pages/common/proposal/ProposalDetails";
import AllProposalForAd from "./pages/post-loggin/ads-provider/proposal/AllProposalForAd";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/dashboard2'} element={<DashboardV2/>}/>
          <Route path={'/ads-creation'} element={<AdsCreation/>}/>
          <Route path={'/my-ads'} element={<MyAdDashboard/>}/>
          <Route path={'/view-proposal/provider'} element={<AdsProposal userType={UserType.AD_PROVIDER}/>}/>
          <Route path={'/view-proposal/buyer'} element={<AdsProposal  userType={UserType.AD_BUYER}/>}/>
          <Route path={'/view-proposal/:proposalId/provider'} element={<ProposalDetails userType={UserType.AD_PROVIDER}/>}/>
          <Route path={'/view-proposal/:proposalId/buyer'} element={<ProposalDetails userType={UserType.AD_BUYER}/>}/>
          <Route path={'/view-proposal/all/:adId'} element={<AllProposalForAd/>}/>
          <Route path={'/create-proposal'} element={<AdProposalForm/>}/>
          <Route path={'/ad-details/:adId/provider/profile'} element={<AdDetails userType={UserType.AD_PROVIDER}/>}/>
          <Route path={'/ad-details/:adId/buyer/profile'} element={<AdDetails userType={UserType.AD_BUYER}/>}/>
          <Route path={'/ad-buyer-dashboard'} element={<AdBuyerDashboard/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
