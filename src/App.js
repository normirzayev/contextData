import React, { useContext } from 'react';
import Home from './components/home/Home';
import { DataContext } from './context/Context';
const App = () => {
  const {data} = useContext(DataContext);
  return (
    <div>
      <Home />

        {
          data.map((item, index) => (
            <div key={item.id}>
              <h1>{index+1}-sanoq: {item.count } </h1>
            </div>
          ))
        }
    </div>
  );
};

export default App;