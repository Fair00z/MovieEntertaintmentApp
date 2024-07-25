import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Store/firebaseContext'
import {FirebaseContext} from './Store/firebaseContext'
import {app as firebase} from './Firebase/config'
import MovieContext from './Store/moviedetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieContext>
      <FirebaseContext.Provider value={{firebase}}>
        <Context>
          <App /> 
        </Context>
    </FirebaseContext.Provider>
    </MovieContext>
  </React.StrictMode>
);
