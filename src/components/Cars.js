import React from 'react';
import Car from './Car';

export default function Cars({ carList }) {
  return (
    <div>
      {carList && carList.map(car => <Car key={car.plateNumber} {...car} />)}
    </div>
  );
}
