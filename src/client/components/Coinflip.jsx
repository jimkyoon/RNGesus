import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  message: store.random.message,
  result: store.random.result,
});

const mapDispatchToProps = dispatch => ({
  coinFlip: (event) => {
    dispatch(actions.coinFlip(event));
  },
});

const Coinflip = (props) => {
  console.log(props.message, props.result);
  return (
    <div>
      <button onClick={props.coinFlip}>FLIP COIN</button>
      {/* <button>FLIP COIN</button> */}
      <p>{props.message} {props.result}</p>
    </div>
  )
  };

export default connect(mapStateToProps, mapDispatchToProps)(Coinflip);
