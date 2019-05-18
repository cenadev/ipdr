import { React, userState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './Main.css';
import Header from './Header';
import Cadastrar from '../pages/Cadastrar'
import Membros from '../pages/Membros'
import Welcome from './Welcome';

export default function Main() {
  const [ titlePage, setTitlePage ] = userState();

  return (
    <>
      <Header />
      <div className="Main">
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Welcome}/>
          <Route path="/cadastrar" component={Cadastrar}/>
          <Route path="/membros" component={Membros}/>
        </Switch>
        </BrowserRouter>
    </div>
    </>
  );
}