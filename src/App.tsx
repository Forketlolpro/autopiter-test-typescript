import React from 'react';
import Button from './UI/Button/Button'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button actionType='save' onClickHandler={(e)=>console.log('click')}>Нажми</Button>
    </div>
  );
}

export default App;
