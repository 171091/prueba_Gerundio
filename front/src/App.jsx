import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Home } from "./components/Home";

import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />;
        <Route path="/home" element={<Home />} />;
        {/*<Route path="/createfood" element={<Form />} />;*/}
      </Routes>
    </div>
  );
}

export default App;
