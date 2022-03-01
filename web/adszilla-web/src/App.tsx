import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestMe from "./pages/post-loggin/TestMe";
import Dashboard from "./pages/post-loggin/ads-buyer/Dashboard";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TestMe />}/>
        <Route path={'/ads-buyer-portal'} element={<Dashboard />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
