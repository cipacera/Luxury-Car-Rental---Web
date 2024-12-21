import React from 'react';
import { useParams } from 'react-router-dom';

const carDetails = {
  1: { name: 'Mercedes S-Class', price: '200 USD/day', description: 'Luxury sedan with top-notch comfort.' },
  2: { name: 'BMW 7 Series', price: '180 USD/day', description: 'Elegant and powerful luxury car.' },
};

function CarDetailsPage() {
  const { id } = useParams();
  const car = carDetails[id];

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <main>
      <h1>{car.name}</h1>
      <p>{car.description}</p>
      <p>Price: {car.price}</p>
      <button>Book Now</button>
    </main>
  );
}

export default CarDetailsPage;