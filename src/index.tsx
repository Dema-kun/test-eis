import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RootStore } from './store/RootStore';

const store = RootStore.create({});
export const StoreContext = createContext(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
