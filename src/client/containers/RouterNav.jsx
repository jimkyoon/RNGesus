import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import from child components...
import Header from '../containers/RouteHeader.jsx';
import Coinflip from '../components/Coinflip.jsx';
import Diceroll from '../components/Diceroll.jsx';
import PickANum from '../components/Pickanum.jsx';
import Lotto from '../components/Lotto.jsx';

const Nav = (props) => {
  const { data } = props;
  return (
    <Router>
      <div>
        <Header />
        <Route path='/coinflip' component={Coinflip} />
        {/* <Route path='/coinflip' render={(data) => <Coinflip {...data} />} /> */}
        <Route path='/diceroll' component={Diceroll} />
        <Route path='/pickanum' component={PickANum} />
        <Route path='/lotto' component={Lotto} />
      </div>
    </Router>
  );
};

export default Nav;
