import React, { useContext } from 'react';
import { DataContext } from '../../context/Context';

const Home = () => {
  const {data, plus, minus} = useContext(DataContext);
  return (
    <div>
      {
        data.map(item => (
          <div key={item.id}>
            <h1>
              <button onClick={() => minus(item)} > - </button>
              {item.count}
              <button onClick={()   => plus(item)}> + </button>
            </h1>
          </div>
        ))
      }
    </div>
  );
};

export default Home;