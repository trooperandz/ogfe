import { BrowserRouter, Route, Routes } from "react-router";

import AboutPage from "../pages/About";
import DashboardPage from "../pages/DashboardPage";

export const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
