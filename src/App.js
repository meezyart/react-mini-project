
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import Layout from './containers/Layout';
import Header from './containers/Header';


import { fetchActivity } from './actions/index'


class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false
    };
  }
  componentWillMount() {
    this.props.fetchActivity().then(() => {
      this.setState({ loading: false });
    });;
  }
  render() {
    if (this.state.loading) {
      return <div>
          <h1>Loading...</h1>
        </div>;
    } 
      return <div>
          <Header />
          <Layout  />
        </div>;
  }
}

const mapDispatchToProps = {
  fetchActivity
};

export default withRouter(connect(null, mapDispatchToProps)(App))