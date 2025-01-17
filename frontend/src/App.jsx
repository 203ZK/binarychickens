import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from './components/Dashboard';
import Mart from "./components/Mart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:userId" element={<Dashboard />}></Route>
        <Route path="/:userId/mart" element={<Mart />}></Route> 
      </Routes>
    </Router>
  );
}

export default App;