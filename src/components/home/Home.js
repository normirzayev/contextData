import React, { useContext } from 'react';
import { DataContext } from '../../context/Context';

const Home = () => {
  const {data} = useContext(DataContext);
  return (
    <div>
      {
        data.map((item, index) => (
          <div key={item.id}>
            <ul>
              <li> {index + 1} ism: {item.ism}</li>
              <li> yoshi: {item.yosh}</li>
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Home;