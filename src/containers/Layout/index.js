import React from 'react';

import { withRouter } from 'react-router';
import {  Route, Switch} from 'react-router-dom';

import SideBar from '../../components/SideBar/'
import MainContent from '../../components/MainContent/';

const Layout = () => (
  <section className="section">
    <div className="container">
      <div className="columns is-5 is-variable">
        <div className="column is-one-quarter">
          <Route exact path="/" component={SideBar} />
          <Switch>
            <Route exact path="/:section" component={SideBar} />
            <Route exact path="/:section/:id" component={SideBar} />
            <Route exact component={SideBar} />
          </Switch>
        </div>
        <div className="column ">
          <Switch>
            <Route exact path="/:section" component={MainContent} />
            <Route exact path="/:section/:id" component={MainContent} />
            <Route component={MainContent} />
          </Switch>
        </div>
      </div>
    </div>
  </section>
);

export default withRouter(Layout);
