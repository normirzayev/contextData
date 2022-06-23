import React, { useEffect, useState } from "react";
export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  const malumot = [
    {
      id:1,
      ism : "abror",
      yosh: 15,
      count:0
    },
    {
      id:2,
      ism: "karima",
      yosh: 12,
      count:0
    }
  ]
  
  useEffect(() => {
    setData(malumot)
  }, [])

  const plus = (item) => {
    const plusData = data.map(element => {
      return element.id == item.id ? { ...element, count: element.count + 1 } : element
    })

    // const plusData = data.map(element => {
    //   if(element.id == item.id){
    //     return {...element, count: element.count + 1}
    //   }
    //   else{
    //     return element;
    //   }
    // })
    setData(plusData);
  }

  const minus = (item) => {
    const minusData = data.map(element => {
      if(element.id == item.id && element.count > 0){
        return { ...element, count: element.count - 1}
      } 
      else{
        return element
      }
    })
    setData(minusData);
  }

  return (
    <DataContext.Provider value={{ data, plus, minus}}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContextProvider;