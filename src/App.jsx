import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import { Layout } from "./views/Layout/Layout";

import { HomePage } from "./pages/HomePage/HomePage";

export const App = () => {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            {/* <Route path="privacy-policy" element={<PrivacyPolicyPage />} /> */}
          </Route>
        </Routes>
      </>
    </HashRouter>
  );
};
