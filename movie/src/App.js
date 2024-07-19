
import './App.css';
import Home from './Containers/HomePage/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './Containers/LoginPage/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>\
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
