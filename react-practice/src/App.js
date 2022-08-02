import React from 'react';
import './App.css';
import AddRemoveList from './CodingChallenges/AddRemoveList/AddRemoveList';
import Parent from './CodingChallenges/ChangeParentState/Parent';
import ParentCount from './CodingChallenges/CountWithContext/Parent';
import FetchRandom from './CodingChallenges/FetchRandomData/FetchRandom';
import Counter from './CounterRedux';
import ShowNested from './CodingChallenges/ShowNestedObject/ShowNested';

function App() {
  return (
    <div className="App">
      <ShowNested></ShowNested>
    </div>
  );
}

export default App;
