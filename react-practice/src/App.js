import React from 'react';
import './App.css';
import AddRemoveList from './CodingChallenges/AddRemoveList/AddRemoveList';
import Parent from './CodingChallenges/ChangeParentState/Parent';
import ParentCount from './CodingChallenges/CountWithContext/Parent';
import FetchRandom from './CodingChallenges/FetchRandomData/FetchRandom';
import Counter from './CounterRedux';

function App() {
  return (
    <div className="App">
      <AddRemoveList></AddRemoveList>
    </div>
  );
}

export default App;
