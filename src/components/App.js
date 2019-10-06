import React from 'react';
import { GET_CARS } from '../gql/queries';
import { useQuery } from '@apollo/react-hooks';
import Cars from './Cars';

function App() {
  const { loading, error, data } = useQuery(GET_CARS);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Apollo Hooks Cars</h1>
          {error ? (
            <p>error</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : data ? (
            <Cars carList={data.cars} />
          ) : null}
        </div>
      </header>
    </div>
  );
}

export default App;
