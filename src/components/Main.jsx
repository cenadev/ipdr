import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './Main.css';
import Header from './Header';
import Cadastrar from '../pages/Cadastrar'
import Membros from '../pages/Membros'
import Welcome from '../pages/Welcome';

export default function Main() {

  useEffect(() => {
    setTitle()
  })

  const setTitle = function () {

    let title = document.title;
    let pathname = window.location.pathname;
    switch (pathname) {
      case "/":
        return(title = "Bem Vindo", document.title = title)
        break;
      case "/cadastrar":
        return(title = "Cadastro", document.title = title);
        break;
      case "/membros":
        return(title = "Membros", document.title = title);
        break;

      default:
        return(title = "CDIV", document.title = title);
        break;
    }
  }

  return (
    <>
      <Header content={setTitle()} />
      <div className="Main">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/cadastrar" component={Cadastrar} />
            <Route path="/membros" component={Membros} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}