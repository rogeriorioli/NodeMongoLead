import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Layouts from './Layouts';
import Sobre from './Components/Sobre';
import Edit from './Components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';


// import { Container } from './styles';

ReactDOM.render(
    <BrowserRouter>
            <Switch>
               
                  <Route path="/" exact={true} component={Main} />

                <Layouts>
                    <Route path="/leads" component={Sobre} />
                    <Route path={`/edit/:id` } component={Edit} />
                </Layouts>
            </Switch>
        </ BrowserRouter>
    , document.getElementById('root'));

