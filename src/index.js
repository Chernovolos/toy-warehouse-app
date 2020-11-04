import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import "./style/scss/index.scss";
import ReduxToastr from "react-redux-toastr";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
          <div>
              <ReduxToastr
                  preventDuplicates
                  getState={(state) => state.toastr} // This is the default
                  transitionIn="fadeIn"
                  transitionOut="fadeOut"
                  progressBar
                  closeOnToastrClick/>
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
