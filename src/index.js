import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store';
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe/stripe';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>

  </React.StrictMode>
);
reportWebVitals();
