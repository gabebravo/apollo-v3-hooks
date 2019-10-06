import React from 'react';

export default function Car({ plateNumber, model, yearOfManufacture }) {
  return (
    <ul style={{ listStyleType: 'none' }}>
      <li>
        <span style={{ fontWeight: 'bold' }}>model: </span>
        {` ${model}`}
      </li>
      <li>
        <span style={{ fontWeight: 'bold' }}>year: </span>
        {` ${yearOfManufacture}`}
      </li>
      <li>
        <span style={{ fontWeight: 'bold' }}>plate#: </span>
        {` ${plateNumber}`}
      </li>
    </ul>
  );
}
