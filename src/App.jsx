import React from "react";
import { Route, Routes } from "react-router-dom";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";
import Layout from "./components/Layout";
import Daily from "./pages/Daily";

const App = () => {
  return (
    <div className="bg-secondary">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pending-tasks" element={<Pending />} />
          <Route path="completed-tasks" element={<Completed />} />
          <Route path="daily-tasks" element={<Daily />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
