import React from 'react';
import './App.scss';
import {Header} from "./Header/Header";
import {Posts} from "./Posts/Posts";
import {Footer} from "./Footer/Footer";
import {PageTitle} from "./PageTitle/PageTitle";

function App() {
  return (
    <body>
    <Header />
    <PageTitle />
    <Posts />
    <Footer />
    </body>
  );
}

export default App;
