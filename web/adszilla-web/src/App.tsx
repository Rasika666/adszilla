import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestMe from "./pages/post-loggin/TestMe";
import DashboardV2 from "./pages/post-loggin/ads-buyer/DashboardV2";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<TestMe/>}/>
          <Route path={'/dashboard2'} element={<DashboardV2/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
