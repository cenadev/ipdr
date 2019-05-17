import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './Main.css';
import Header from './Header';
import Cadastrar from '../pages/Cadastrar'
import Membros from '../pages/Membros'
export default function Main() {
  return (
    <>
      <Header />
      <div className="Main">
        <BrowserRouter>
        <Switch>
          <Route path="/cadastrar" component={Cadastrar}/>
          <Route path="/membros" component={Membros}/>
        </Switch>
        </BrowserRouter>
    </div>
    </>
  );
}