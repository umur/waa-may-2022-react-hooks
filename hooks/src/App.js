import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import  {BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/register" exact element={<Signup/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="*" exact element={<PageNotFound/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
