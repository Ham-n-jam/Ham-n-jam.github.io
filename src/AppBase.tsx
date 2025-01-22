import { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/MainPage/SideBar";
import SplashIntroEffect from "./components/MainPage/SplashIntroEffect";

function AppBase() {
  const [showSplashScreenFx, setShowSplashScreenFx] = useState(true);
  document.documentElement.style.setProperty("--ab-scrollbar-width", "0px");

  useEffect(() => {
    setTimeout(function () {
      setShowSplashScreenFx(false);
      document.documentElement.style.removeProperty("--ab-scrollbar-width");
    }, 3500);
  }, []);

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
      </style>
      {showSplashScreenFx ? <SplashIntroEffect /> : null}
      <SideBar />
      <div className="App">
        <MainPage />
      </div>
    </div>
  );
}

export default AppBase;
