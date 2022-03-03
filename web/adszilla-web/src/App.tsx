import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestMe from "./pages/post-loggin/TestMe";
import DashboardV2 from "./pages/post-loggin/ads-buyer/DashboardV2";
import AdsCreation from "./pages/post-loggin/ads-provider/AdsCreation";
import MyAdDashboard from "./pages/post-loggin/ads-provider/MyAdDashboard";
import AdsProposal from "./pages/post-loggin/ads-provider/AdsProposal";
import AdDetails from "./pages/post-loggin/ads-buyer/AdDetails";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<TestMe/>}/>
          <Route path={'/dashboard2'} element={<DashboardV2/>}/>
          <Route path={'/ads-creation'} element={<AdsCreation/>}/>
          <Route path={'/my-ads'} element={<MyAdDashboard/>}/>
          <Route path={'/view-proposal'} element={<AdsProposal/>}/>
          <Route path={'/adscreation'} element={<AdsCreation/>}/>
          <Route path={'/adDetails'} element={<AdDetails/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
