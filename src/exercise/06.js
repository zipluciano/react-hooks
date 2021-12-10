// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import {
  PokemonDataView,
  PokemonForm,
  PokemonInfoFallback,
  fetchPokemon,
} from '../pokemon';

// Ex 6

// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setPokemon(null)
//     fetchPokemon(pokemonName).then(pokemon => setPokemon(pokemon))
//   }, [pokemonName])

//   if (!pokemonName) {
//     return 'Submit a pokemon'
//   } else if (!pokemon) {
//     return <PokemonInfoFallback name={pokemonName} />
//   } else {
//     return <PokemonDataView pokemon={pokemon} />
//   }
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('');
//   const [error, setError] = React.useState(null);

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName);
//   }

//   return (
//     <div className='pokemon-info-app'>
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className='pokemon-info'>
//         <PokemonInfo
//           pokemonName={pokemonName}
//           errorState={{ error, setError }}
//         />
//       </div>
//       {error === null ? (
//         ''
//       ) : (
//         <div role='alert'>
//           There was an error:{' '}
//           <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// Ex 6 - extra 1

// function PokemonInfo({ pokemonName }) {
//   const [pokemon, setPokemon] = React.useState(null);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setPokemon(null);
//     setError(null);
//     fetchPokemon(pokemonName)
//       .then(pokomonData => setPokemon(pokomonData))
//       .catch(error => setError(error));
//   }, [pokemonName, setError]);

//   if (error) {
//     return (
//       <div role='alert'>
//         There was an error:{' '}
//         <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>{' '}
//       </div>
//     );
//   }

//   if (!pokemonName) {
//     return 'Submit a pokemon';
//   } else if (!pokemon) {
//     return <PokemonInfoFallback name={pokemonName} />;
//   } else {
//     return <PokemonDataView pokemon={pokemon} />;
//   }
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('');

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName);
//   }

//   return (
//     <div className='pokemon-info-app'>
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className='pokemon-info'>
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   );
// }

// Ex 6 - extra 2

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setPokemon(null);
    setError(null);
    setStatus('pending');
    fetchPokemon(pokemonName)
      .then(pokomonData => {
        setPokemon(pokomonData);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName, setError, setStatus]);

  if (status === 'rejected') {
    return (
      <div role='alert'>
        There was an error:{' '}
        <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>{' '}
      </div>
    );
  }

  if (status === 'idle') {
    return 'Submit a pokemon';
  } else if (status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />;
  } else {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('');

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className='pokemon-info-app'>
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className='pokemon-info'>
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  );
}

export default App;
