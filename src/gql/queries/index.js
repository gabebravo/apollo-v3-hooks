import { gql } from 'apollo-boost';

export const GET_CARS = gql`
  {
    cars {
      plateNumber
      yearOfManufacture
      model
    }
  }
`;
