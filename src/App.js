import React from 'react';
import { GET_CARS } from './gql/queries';
import { useQuery } from '@apollo/react-hooks';

function App() {
  const { loading, error, data } = useQuery(GET_CARS);

  if (loading) {
    console.log('loading');
  }

  if (error) {
    console.log('error');
  }

  if (data) {
    console.log('data', data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apollo Hooks Test</h1>
      </header>
    </div>
  );
}

export default App;
