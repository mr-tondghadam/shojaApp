import { Routes, Route } from "react-router-dom";
import Home from "../pages/web/home";
import App from "../App";
import LoginPage from "../pages/web/login";
import RegisterPage from "../pages/web/register";
import ArticlePage from "../pages/web/ArticlePage";
import ProductPage from "../pages/web/ProductPage";
import ScrollToTop from "../components/shared/ScrollToTop";
import ForgetPass from "../pages/web/forgetPass";
import Cart from "../pages/web/Cart";

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='article' element={<ArticlePage />} />
        <Route path='product-page' element={<ProductPage />} />
        <Route path='forget-pass' element={<ForgetPass />} />
        <Route path='cart' element={<Cart />} />

        {/*   <Route path='about' element={<About />} />
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
  </>
);

export default AppRoutes;
