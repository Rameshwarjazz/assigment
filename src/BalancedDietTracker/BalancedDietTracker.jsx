import React, { useState } from 'react';
import './BalancedDietTracker.css'

export const BalancedDietTracker = () => {
  const [meal, setMeal] = useState('');
  const [foodItems, setFoodItems] = useState([]);
  const [date, setDate] = useState('');

  const addFoodItem = () => {
    const newFoodItem = { meal, date };
    setFoodItems([...foodItems, newFoodItem]);
  };

  return (
    <div>
      <h2>Balanced Diet Tracker</h2>
      <div className='input'>
      <label>
        Meal:
        <input
         placeholder='Make a List oF Healthy Meal'
          type="text"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <button onClick={addFoodItem}>Add Food Item</button>

      <h3>Diet History:</h3>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>{item.meal} on {item.date}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};


