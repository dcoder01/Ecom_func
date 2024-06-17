import Item from "./components/Item"
import React, { useState } from 'react';
import Mycart from "./components/Mycart";
import { Cartprovider } from "./contexts/Cart";

function App() {

  const [items, setItems] = useState([]);
  const addItems=(name, price)=>{
    setItems((prev)=>(
      [...prev,{ name: name, price: price }]
    ))
  }

  return (

    <Cartprovider value={{ items, addItems }}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Item name="LG TV" price={15000} />
        <Item name="laptop" price={70000} />
        <Item name="phone" price={17000} />
        <Mycart />
      </div>

    </Cartprovider>
  )
}

export default App

