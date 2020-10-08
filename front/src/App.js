import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAnuncioComponent from './components/ListAnuncioComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateAnuncioComponent from './components/CreateAnuncioComponent';
import ViewAnuncioComponent from './components/ViewAnuncioComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAnuncioComponent}></Route>
                          <Route path = "/Anuncios" component = {ListAnuncioComponent}></Route>
                          <Route path = "/add-Anuncio/:id" component = {CreateAnuncioComponent}></Route>
                          <Route path = "/view-Anuncio/:id" component = {ViewAnuncioComponent}></Route>
                          {/* <Route path = "/update-Anuncio/:id" component = {UpdateAnuncioComponent}></Route> */}
                    </Switch>
                </div>
      
        </Router>
    </div>
    
  );
}

export default App;
