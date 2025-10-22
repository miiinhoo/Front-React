import { RouterProvider } from 'react-router-dom';
import { JSX } from 'react';
import root from './routers/root';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <RouterProvider router={root}/>
    </div>
  );
};

export default App;
