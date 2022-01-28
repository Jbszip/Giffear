import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Detail from './pages/Detail/Detail';
import { GifsContextProvider } from "./context/GifsContext";
import E404 from './pages/E404/E404'

import {Route, Switch} from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
          <GifsContextProvider>
           <Switch>
              <Route component={Home} path='/' />
              <Route component={SearchResults} path='/search/:keyword' />
              <Route component={Detail} path='/gif/:id' />
              <Route>{E404}</Route>
            </Switch>
          </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
