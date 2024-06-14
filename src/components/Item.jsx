import React from 'react';
import useCart from '../contexts/Cart';
function Item({ name, price }) {
    const cart= useCart();
    console.log(cart);
    return (
        <div className="card mb-3" style={{ width: '18rem' }}>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price}</p>
                <button onClick={() => cart.setItems([...cart.items, { name: name, price: price }])} className='btn btn-dark'> add to cart</button>
            </div>
        </div>
    );
}

export default Item;
