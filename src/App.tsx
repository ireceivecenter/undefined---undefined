import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import { ChooseCountry } from "./screens/ChooseCountry/ChooseCountry";
import { InstantReceive } from "./screens/InstantReceive/InstantReceive";

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/choose-country" element={<ChooseCountry />} />
          <Route path="/instant-receive" element={<InstantReceive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
