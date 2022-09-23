import './App.css';
import MainPage from "./components/main-page/MainPage";
import SideBar from "./components/main-page/SideBar";
import TvScreenTurnOnEffect from "./components/main-page/TvScreenTurnOnEffect";

function App() {
  return (
    <div>
        <TvScreenTurnOnEffect />
        <SideBar />
        <div className="App">
            <MainPage />
        </div>
    </div>
  );
}

export default App;
