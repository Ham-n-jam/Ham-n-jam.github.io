import './App.css';
import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/MainPage/SideBar";
import SplashIntroEffect from "./components/MainPage/SplashIntroEffect";

function App() {
  return (
    <div>
        <SplashIntroEffect />
        <SideBar />
        <div className="App">
            <MainPage />
        </div>
    </div>
  );
}

export default App;
