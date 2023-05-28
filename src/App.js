import './App.css';
import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/MainPage/SideBar";
import SplashIntroEffect from "./components/MainPage/SplashIntroEffect";

function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');
      </style>
        <SplashIntroEffect />
        <SideBar />
        <div className="App">
            <MainPage />
        </div>
    </div>
  );
}

export default App;
