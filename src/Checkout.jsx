import React from 'react';
import "./Checkout.css";
import { useSelector } from 'react-redux';

const Checkout = () => {
  const total = useSelector(state => state.basket.total);
  const items = useSelector(state => state.basket.items);

  const handleIncrement = (itemId) => {
    dispatch(changeCount({ Id: itemId, count: count+1 }));
  };
  
  const handleDecrement = (itemId) => {
    const currentItem = items.find(item => item.Id === itemId);
    if (currentItem && currentItem.count > 1) {
      dispatch(changeCount({ Id: itemId, count: count-1 }));
    }
  };
  

  return (
    <div>
      <div className='checkout-container'>
        <table className='checkout-table' style={{ width: "60%", tableLayout: "auto", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>Image</th>
              <th style={{ border: "1px solid black" }}>Product</th>
              <th style={{ border: "1px solid black" }}>Price</th>
              <th style={{ border: "1px solid black" }}>Quantity</th>
              <th style={{ border: "1px solid black" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.Id}>
                <td style={{ border: "1px solid black" }}>
                  <img src={item.ProductImage} alt={item.Name} style={{ width: "100px", display: "block", margin: "0 auto" }} />
                </td>
                <td style={{ border: "1px solid black" }}>{item.Name}</td>
                <td style={{ border: "1px solid black" }}>{item.Price.toFixed(2)}</td>
                <td style={{ border: "1px solid black" }}>
                  <button onClick={() => handleIncrement(item.Id)}>+</button>
                  <span style={{ margin: "0 5px" }}>{item.count}</span>
                  <button onClick={() => handleDecrement(item.Id)}>-</button>
                </td>
                <td style={{ border: "1px solid black" }}>{(item.Price * item.count).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "40px", textAlign: "right" }}>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default Checkout;
