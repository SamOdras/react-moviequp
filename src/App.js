import React from 'react';
import './App.styles.scss';
import { Switch, Route } from 'react-router-dom';

import MovieLogin from './pages/movie-auth/movie-auth.component';
import MovieListPage from './pages/movie-list/movie-list.component';
import MovieFavorite from './pages/movie-favourite/movie-favorite.component';

const App = () => {
  return(
    <Switch>
      <Route path="/" exact component={MovieListPage}/>
      <Route path="/movie/favorite" exact component={MovieFavorite}/>
      <Route path="/login" exact component={MovieLogin}/>
    </Switch>
  )
}

export default App;