import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import i18next from "./i18n";
import Spinner from "./components/spinner/spinner.component";

import * as serviceWorker from "./serviceWorker";
const getRidWarning = `${i18next}`;
console.log(getRidWarning)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <App />
        </Suspense>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

serviceWorker.register();
