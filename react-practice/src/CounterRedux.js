import React from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "./redux/actions";

function Counter({
    count, increaseCounter, decreaseCounter
}) {
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCounter}>+</button>
    <br/>
    <br/>
    <button onClick={decreaseCounter}>-</button>
    
  </div>;
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(incrementCounter()),
    decreaseCounter: () => dispatch(decrementCounter()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter)