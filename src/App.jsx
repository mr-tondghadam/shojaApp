import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "./App.css";
import ImgFlout from "./components/hiro/imgFlout";
import SideMenu from "./components/home/sideMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/navbarWithFooter/footer";
import MyNavbar from "./components/navbarWithFooter/nav";
const user = {};
function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-out-sine",
      delay: 0,
      offset: 80,
      mirror: true,
    });
    AOS.refresh();
  }, []);
  return (
    <HelmetProvider>
      <div
        className='overflow-x-hidden bg-slate-200 text-neutral-300 antialiased selection:text-cyan-500'
        dir='rtl'>
        <div className='mx-auto overflow-x-hidden  w-full '>
          <MyNavbar
            user={user?._id ? user : null}
            setShowSideMenu={setShowSideMenu}
          />
          <SideMenu show={showSideMenu} setShow={setShowSideMenu} />
          <ImgFlout />
          <main className='px-4 mt-10'>
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
