import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestMe from "./pages/post-loggin/TestMe";
import DashboardV2 from "./pages/post-loggin/ads-buyer/DashboardV2";
import AdsCreation from "./pages/post-loggin/ads-provider/AdsCreation";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<TestMe/>}/>
          <Route path={'/dashboard2'} element={<DashboardV2/>}/>
          <Route path={'/adscreation'} element={<AdsCreation/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
