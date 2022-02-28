import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestMe from "./pages/post-loggin/TestMe";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TestMe />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
