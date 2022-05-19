import "./App.css";
import Dashboard from "./dashboard";
import { ThemeColorContext } from "./theme/ThemeColor";

function App() {
  return (
    <ThemeColorContext.Provider value={{
      color: 'red',
    }}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeColorContext.Provider>
  );
}

export default App;
