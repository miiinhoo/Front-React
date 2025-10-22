import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { JSX } from 'react';
import root from './routers/root';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <BrowserRouter router={root}/>
    </div>
  );
};

export default App;
