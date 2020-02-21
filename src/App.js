import React, { lazy, Suspense } from "react";
import "./App.styles.scss";
import { Route, Router } from "react-router-dom";
import history from "./history";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const MovieLogin = lazy(() =>
  import("./pages/movie-auth/movie-auth.component")
);
const MovieListPage = lazy(() =>
  import("./pages/movie-list/movie-list.component")
);
const MovieFavorite = lazy(() =>
  import("./pages/movie-favourite/movie-favorite.component")
);
const MovieDetailPage = lazy(() =>
  import("./pages/movie-details/movie-details.component")
);
const MovieSearchPage = lazy(() =>
  import("./pages/movie-search/movie-search.component")
);

const App = () => {
  return (
    <Router history={history}>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
