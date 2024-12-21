import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  { id: 1, name: 'Mercedes S-Class', price: '200 USD/day' },
  { id: 2, name: 'BMW 7 Series', price: '180 USD/day' },
];

function HomePage() {
  return (
    <main>
      <h1>Welcome to Luxury Car Rentals</h1>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-item">
            <h2>{car.name}</h2>
            <p>{car.price}</p>
            <Link to={`/car/${car.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;