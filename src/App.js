import React from 'react';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import AxiosHooks from './components/AxiosHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      <AxiosHooks/>
    </div>
  );
}

export default App;
