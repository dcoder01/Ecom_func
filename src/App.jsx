import Item from "./components/Item"
import React, { useState } from 'react';
import Mycart from "./components/Mycart";
import { Cartprovider } from "./contexts/Cart";

function App() {

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0)
  return (

    <Cartprovider value={{ items, setItems, total,setTotal }}>
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

