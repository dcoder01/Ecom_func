import React, { useEffect, useState } from 'react'
import useCart from '../contexts/Cart'
function Mycart() {
    const cart= useCart()
    // const total=cart.items.reduce((sum,item)=> sum+item.price,0) ;
    const showPrice=()=>{
       return cart.items.reduce((sum, item)=>sum+item.price,0)
    }
    return (
        <div className="card mb-3" style={{ width: '18rem' }}>
        
            <div className="card-body">
                <h5>Your cart items</h5>
                {
                    cart && cart.items.map((item)=><li key={Math.random()} >{item.name}-{item.price}</li> )
                }
                <h5>Total Price - {showPrice()}</h5>
                
            </div>
        </div>
    )
}

export default Mycart