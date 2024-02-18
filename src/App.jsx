import { MyGroups } from "./components/myGroups";
import "./App.css";
import { MainContent } from "./components/MainContent";
function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <MyGroups />
      <MainContent />
    </div>
  );
}

export default App;
