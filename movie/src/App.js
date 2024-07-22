
import './App.css';
import Home from './Containers/HomePage/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './Containers/LoginPage/login';
import SignUp from './Containers/SignUpPage/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>\
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
