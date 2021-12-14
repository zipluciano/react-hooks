// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import {
  PokemonDataView,
  PokemonForm,
  PokemonInfoFallback,
  fetchPokemon,
} from '../pokemon';
import { ErrorBoundary } from 'react-error-boundary';

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

// function PokemonInfo({ pokemonName }) {
//   const [pokemon, setPokemon] = React.useState(null);
//   const [error, setError] = React.useState(null);
//   const [status, setStatus] = React.useState('idle');

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setPokemon(null);
//     setError(null);
//     setStatus('pending');
//     fetchPokemon(pokemonName)
//       .then(pokomonData => {
//         setPokemon(pokomonData);
//         setStatus('resolved');
//       })
//       .catch(error => {
//         setError(error);
//         setStatus('rejected');
//       });
//   }, [pokemonName, setError, setStatus]);

//   if (status === 'rejected') {
//     return (
//       <div role='alert'>
//         There was an error:{' '}
//         <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>{' '}
//       </div>
//     );
//   }

//   if (status === 'idle') {
//     return 'Submit a pokemon';
//   } else if (status === 'pending') {
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

// Ex 6 - extra 3

// function PokemonInfo({ pokemonName }) {
//   const [state, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   });

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setState({ status: 'pending', pokemon: null });
//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setState({ status: 'resolved', pokemon: pokemonData });
//       })
//       .catch(error => {
//         setState({ status: 'rejected', error: error });
//       });
//   }, [pokemonName, setState]);

//   if (state.status === 'rejected') {
//     return (
//       <div role='alert'>
//         There was an error:{' '}
//         <pre style={{ whiteSpace: 'normal' }}>{state.error.message}</pre>{' '}
//       </div>
//     );
//   }

//   if (state.status === 'idle') {
//     return 'Submit a pokemon';
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />;
//   } else {
//     return <PokemonDataView pokemon={state.pokemon} />;
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

// Ex 6 - extra 4

// class ErrorBoundary extends React.Component {
//   state = { error: null };
//   static getDerivedStateFromError(error) {
//     return { error };
//   }

//   render() {
//     if (this.state.error) {
//       return (
//         <div>
//           <h1>There was an error: </h1>
//           <p>{this.state.error.message}</p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// function PokemonInfo({ pokemonName }) {
//   const [state, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   });

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setState({ status: 'pending', pokemon: null });
//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setState({ status: 'resolved', pokemon: pokemonData });
//       })
//       .catch(error => {
//         setState({ status: 'rejected', error: error });
//       });
//   }, [pokemonName, setState]);

//   if (state.status === 'rejected') {
//     return (
//       <div role='alert'>
//         There was an error:{' '}
//         <pre style={{ whiteSpace: 'normal' }}>{state.error.message}</pre>{' '}
//       </div>
//     );
//   }

//   if (state.status === 'idle') {
//     return 'Submit a pokemon';
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />;
//   } else {
//     return <PokemonDataView pokemon={state.pokemon} />;
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
//         <ErrorBoundary>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }

// Ex 6 - extra 5

// class ErrorBoundary extends React.Component {
//   state = { error: null };
//   static getDerivedStateFromError(error) {
//     return { error };
//   }

//   render() {
//     if (this.state.error) {
//       return (
//         <div>
//           <h1>There was an error: </h1>
//           <p>{this.state.error.message}</p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// function PokemonInfo({ pokemonName }) {
//   const [state, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   });

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setState({ status: 'pending', pokemon: null });
//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setState({ status: 'resolved', pokemon: pokemonData });
//       })
//       .catch(error => {
//         setState({ status: 'rejected', error: error });
//       });
//   }, [pokemonName, setState]);

//   if (state.status === 'rejected') {
//     return (
//       <div role='alert'>
//         There was an error:{' '}
//         <pre style={{ whiteSpace: 'normal' }}>{state.error.message}</pre>{' '}
//       </div>
//     );
//   }

//   if (state.status === 'idle') {
//     return 'Submit a pokemon';
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />;
//   } else {
//     return <PokemonDataView pokemon={state.pokemon} />;
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
//         <ErrorBoundary >
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }

// Ex 6 - extra 6

// class ErrorBoundary extends React.Component {
//   state = { error: null };
//   static getDerivedStateFromError(error) {
//     return { error };
//   }

//   render() {
//     if (this.state.error) {
//       return (
//         <div>
//           <h2>There was an error: </h2>
//           <p>{this.state.error.message}</p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// function PokemonInfo({ pokemonName }) {
//   const [state, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   });

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setState({ status: 'pending', pokemon: null });
//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setState({ status: 'resolved', pokemon: pokemonData });
//       })
//       .catch(error => {
//         setState({ status: 'rejected', error: error });
//       });
//   }, [pokemonName, setState]);

//   if (state.status === 'idle') {
//     return 'Submit a pokemon';
//   } else if (state.status === 'rejected') {
//     throw state.error;
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />;
//   } else {
//     return <PokemonDataView pokemon={state.pokemon} />;
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
//         <ErrorBoundary key={pokemonName}>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }

// Ex 6 - extra 7

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div>
//       <h2>There was an error: </h2>
//       <p>{error.message}</p>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

// function PokemonInfo({ pokemonName }) {
//   const [state, setState] = React.useState({
//     status: pokemonName ? 'pending' : 'idle',
//     pokemon: null,
//     error: null,
//   });

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return;
//     }
//     setState({ status: 'pending', pokemon: null });
//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setState({ status: 'resolved', pokemon: pokemonData });
//       })
//       .catch(error => {
//         setState({ status: 'rejected', error: error });
//       });
//   }, [pokemonName, setState]);

//   if (state.status === 'idle') {
//     return 'Submit a pokemon';
//   } else if (state.status === 'rejected') {
//     throw state.error;
//   } else if (state.status === 'pending') {
//     return <PokemonInfoFallback name={pokemonName} />;
//   } else {
//     return <PokemonDataView pokemon={state.pokemon} />;
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
//         <ErrorBoundary
//           key={pokemonName}
//           FallbackComponent={ErrorFallback}
//           onReset={() => setPokemonName('')}
//         >
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   );
// }

// Ex 6 - extra 8

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>There was an error: </h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function PokemonInfo({ pokemonName }) {
  const [state, setState] = React.useState({
    status: pokemonName ? 'pending' : 'idle',
    pokemon: null,
    error: null,
  });

  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setState({ status: 'pending', pokemon: null });
    fetchPokemon(pokemonName)
      .then(pokemonData => {
        setState({ status: 'resolved', pokemon: pokemonData });
      })
      .catch(error => {
        setState({ status: 'rejected', error: error });
      });
  }, [pokemonName, setState]);

  if (state.status === 'idle') {
    return 'Submit a pokemon';
  } else if (state.status === 'rejected') {
    throw state.error;
  } else if (state.status === 'pending') {
    return <PokemonInfoFallback name={pokemonName} />;
  } else {
    return <PokemonDataView pokemon={state.pokemon} />;
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
        <ErrorBoundary
          key={pokemonName}
          FallbackComponent={ErrorFallback}
          onReset={() => setPokemonName('')}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
