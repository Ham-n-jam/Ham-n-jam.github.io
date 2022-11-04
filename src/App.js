import './App.css';
import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/MainPage/SideBar";
import TvScreenTurnOnEffect from "./components/MainPage/TvScreenTurnOnEffect";

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
