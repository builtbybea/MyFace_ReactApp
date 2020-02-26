import React from 'react';
import './App.scss';
import {Header} from "./Header/Header";
import {Posts} from "./Posts/Posts";
import {Footer} from "./Footer/Footer";

function App() {
  return (
    <body>
    <Header />
    <Posts />
    <Footer />
    </body>
  );
}

export default App;
