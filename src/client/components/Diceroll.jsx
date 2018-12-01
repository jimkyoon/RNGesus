import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  sides: store.random.sides,
  message: store.random.message,
  result: store.random.result,
});

const mapDispatchToProps = dispatch => ({
  diceRoll: (event) => {
    dispatch(actions.diceRoll(event));
  },
  setSides: (event) => {
    dispatch(actions.setSides(event));
  }
});

const Diceroll = (props) => {
  return (
    <div>
      <label htmlFor="diceSide">Number of Dice Sides: </label>
      <input id="diceSide" type="text" onChange={props.setSides} />
      <button onClick={props.diceRoll}>ROLL DICE</button>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Diceroll);
