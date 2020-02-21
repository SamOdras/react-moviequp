import React from "react";
import "./App.styles.scss";
import {  Route, Router } from "react-router-dom";
import history from './history';

import MovieLogin from "./pages/movie-auth/movie-auth.component";
import MovieListPage from "./pages/movie-list/movie-list.component";
import MovieFavorite from "./pages/movie-favourite/movie-favorite.component";
import MovieDetailPage from "./pages/movie-details/movie-details.component";
import MovieSearchPage from "./pages/movie-search/movie-search.component";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={MovieListPage} />
        <Route path="/movie/favorite" exact component={MovieFavorite} />
        <Route
          path="/movie/details/:movieId"
          exact
          component={MovieDetailPage}
        />
        <Route
          path="/movie/search/:movieKeyword"
          exact
          component={MovieSearchPage}
        />
        <Route path="/login" exact component={MovieLogin} />
      </div>
    </Router>
  );
};

export default App;
