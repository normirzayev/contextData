import React, { useContext } from 'react';
import "./app.css";
import Home from './components/home/Home';
import { DataContext } from './context/Context';
const App = () => {
  const {dataChange, creatData, addButton} = useContext(DataContext);
  return (
    <div>
      <form action="#" onSubmit={addButton} >
        <h1> malumotlar  </h1>
        <input type="text" placeholder='name' name='ism' value={creatData.ism} onChange={dataChange} />
        <input type="text" placeholder='yosh' name='yosh' value={creatData.yosh} onChange={dataChange} />
        <button type='submit'> ADD </button>
      </form>
      <Home />
    </div>
  );
};

export default App;