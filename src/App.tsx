import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import { ThemeProvider } from "./context/ThemeProvider";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
