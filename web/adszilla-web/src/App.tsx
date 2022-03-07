import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/post-loggin/Home";
import DashboardV2 from "./pages/post-loggin/ads-buyer/DashboardV2";
import AdsCreation from "./pages/post-loggin/ads-provider/AdsCreation";
import MyAdDashboard from "./pages/post-loggin/ads-provider/MyAdDashboard";
import AdsProposal from "./pages/post-loggin/ads-provider/AdsProposal";
import AdDetails from "./pages/common/AdDetails";
import AdBuyerDashboard from "./pages/post-loggin/ads-buyer/AdBuyerDashboard";
import AdsProposalBuyer from "./pages/post-loggin/ads-buyer/AdsProposalBuyer";
import {UserType} from "./utils/adCreateUtil";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/dashboard2'} element={<DashboardV2/>}/>
          <Route path={'/ads-creation'} element={<AdsCreation/>}/>
          <Route path={'/my-ads'} element={<MyAdDashboard/>}/>
          <Route path={'/view-proposal'} element={<AdsProposal/>}/>
          <Route path={'/ad-buyer-proposal'} element={<AdsProposalBuyer/>}/>
          <Route path={'/ad-details/:adId/provider/profile'} element={<AdDetails userType={UserType.AD_PROVIDER}/>}/>
          <Route path={'/ad-details/:adId/buyer/profile'} element={<AdDetails userType={UserType.AD_BUYER}/>}/>
          <Route path={'/ad-buyer-dashboard'} element={<AdBuyerDashboard/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
