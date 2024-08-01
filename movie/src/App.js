
import './App.css';
import Home from './Containers/HomePage/home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './Containers/LoginPage/login';
import SignUp from './Containers/SignUpPage/signup';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './Store/firebaseContext';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from './Firebase/config';
import MovieDetails from './Containers/MovieDetails/movieDetails';
import MovieList from './Containers/MovieList/MovieList';
import WishList from './Containers/WishList/WishList';

function App() {
  const{setUser}=useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    onAuthStateChanged(Auth,(user)=>{
      setUser(user)
    })
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/movie/:movieId' element={<MovieDetails/>}></Route>
          <Route exact path='/listmovie' element={<MovieList/>}></Route>
          <Route exact path='/wishlist' element={<WishList/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
