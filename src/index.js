import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user';
import { BrowserRouter } from 'react-router-dom';
import { BooksProvider } from './context/books';
import { LibraryProvider } from './context/library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BooksProvider>
        <LibraryProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LibraryProvider>
      </BooksProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
