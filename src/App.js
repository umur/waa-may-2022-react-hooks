import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./Product";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
