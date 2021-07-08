import './App.css';
import MainPage from "./components/main-page/MainPage";
import SideBar from "./components/main-page/SideBar";

function App() {
  return (
    <div>
        <SideBar />
        <div className="App">
            <MainPage />
        </div>
    </div>
  );
}

export default App;
