import React from 'react';
import './App.css';
import Board from './components/board';

const App=()=>{
  return(
<div>

  <Board />
</div>
  )
}


export default App;

if (module.hot){
  module.hot.accept();
}