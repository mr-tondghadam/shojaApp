import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/web/home";
import App from "../App";

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />

      {/* <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='about' element={<About />} />
      <Route path='single-publication/:tag' element={<SinglePublication />} />
      <Route path='single-portfolio/:id' element={<SinglePortfolio />} /> */}

      {/* <Route path='admin-panel' element={<AdminPanel />}>
        //* certificates
        <Route path='certificates' element={<IndexCertificate />} />
        <Route path='add-certificate' element={<AddCertificate />} />
        <Route path='edit-certificate' element={<EditCertificate />} />
        //*portfolios
        <Route path='portfolios' element={<IndexPortfolios />} />
        <Route path='add-portfolio' element={<AddPortfolios />} />
        <Route path='edit-portfolio' element={<EditPortfolios />} />
        //*publications
        <Route path='publications' element={<IndexPublication />} />
        <Route path='add-publication' element={<AddPublication />} />
        <Route path='edit-publication' element={<EditPublication />} />
      </Route>

      <Route path='*' element={<NotFound />} /> */}
    </Route>
  </Routes>
);

export default AppRoutes;
