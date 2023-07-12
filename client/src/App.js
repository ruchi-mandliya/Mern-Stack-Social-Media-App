import "./App.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur1" style={{ top: "-10px", right: "0rem" }}></div>
      <div className="blur2" style={{ top: "36px", left: "-5rem" }}></div>
      <Home />
    </div>
  );
}

export default App;
