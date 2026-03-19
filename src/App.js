import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import "./App.css";

function App() {
  const location = useLocation();

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 800,     // Animation duration
      once: true,        // Whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  // These checks help conditionally render Header/Footer
  const isAdminRoute = location.pathname.startsWith("/admin-panel");
  const isHomeRoute = location.pathname === "/";
  const isAdminloginRoute = location.pathname === "/admin-login";
  const isMainPageRoute = location.pathname === "/mainpage";

  return (
    <div className="overflow-x-hidden">
      <main>
        {!isAdminRoute && !isAdminloginRoute && !isHomeRoute && !isMainPageRoute}
        <Outlet />
      </main>

    </div>
  );
}

export default App;
