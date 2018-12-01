import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as actions from '../actions/actions';
// import from child components...
import Welcome from '../components/welcomeName.jsx';
import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';
import Nav from '../containers/RouterNav.jsx';
import History from '../components/History.jsx';

const mapStateToProps = store => ({
  message: store.random.message,
  result: store.random.result,
});

const mapDispatchToProps = dispatch => ({
  coinFlip: (event) => {
    dispatch(actions.coinFlip(event));
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          <h1>RNGesus</h1>
          <h3>Pray you get a good roll!</h3>
          < Welcome />
          < Signup />
          < Login />
          <h4>Which random thing do you want?</h4>
          <Nav data={this.props}/>
          <History />
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
