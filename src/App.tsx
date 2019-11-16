import React from 'react';
import Button from './UI/Button/Button'
import Dadata from './Dadata/Dadata';
import * as dadataTypes from './Dadata/DadataTypes';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button actionType='save' onClickHandler={(e)=>console.log('click')}>Нажми</Button>
      <Dadata onSuggestionSelect={(item: dadataTypes.Suggestion)=>console.log(item)}/>
    </div>
  );
}

export default App;
