import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import Layouts from './Layouts';
import Sobre from './Components/Sobre';


// import { Container } from './styles';

ReactDOM.render(
    <Layouts>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </ BrowserRouter>
    </Layouts>
    , document.getElementById('root'));

