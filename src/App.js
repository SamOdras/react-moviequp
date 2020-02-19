import React from 'react';
import './App.styles.scss';
import { Switch, Route } from 'react-router-dom';

import MovieLogin from './pages/movie-auth/movie-auth.component';
import MovieDetailsPage from './pages/movie-details/movie-details.component';
import MovieListPage from './pages/movie-list/movie-list.component';


const App = () => {
  return(
    <Switch>
      <Route path="/" exact component={MovieListPage}/>
      <Route path="/movie/:movieId" exact component={MovieDetailsPage}/>
      <Route path="/login" exact component={MovieLogin}/>
    </Switch>
  )
}

export default App;