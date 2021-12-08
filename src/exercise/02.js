// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react';

// Ex 2

// function Greeting({ initialName = '' }) {
//   const nameState = localStorage.getItem('name') ?? initialName;

//   const [name, setName] = React.useState(nameState);

//   React.useEffect(() => {
//     localStorage.setItem('name', name);
//   }, [name]);

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor='name'>Name: </label>
//         <input value={name} onChange={handleChange} id='name' />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   );
// }

// function App() {
//   return <Greeting />;
// }

// Ex 2 - extra 1 / extra 2

// function Greeting({ initialName = '' }) {
//   const [name, setName] = React.useState(
//     () => localStorage.getItem('name') ?? initialName,
//   );

//   React.useEffect(() => {
//     localStorage.setItem('name', name);
//   }, [name]);

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor='name'>Name: </label>
//         <input value={name} onChange={handleChange} id='name' />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   );
// }

// function App() {
//   return <Greeting />;
// }

// Ex 2 - extra 3

// function useLocalStorageState(key, defaultValue = '') {
//   const [state, setState] = React.useState(
//     () => localStorage.getItem(key) ?? defaultValue,
//   );

//   React.useEffect(() => {
//     localStorage.setItem(key, state);
//   }, [key, state]);

//   return [state, setState];
// }

// function Greeting({ initialName = '' }) {
//   const [name, setName] = useLocalStorageState('name', initialName);

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor='name'>Name: </label>
//         <input value={name} onChange={handleChange} id='name' />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   );
// }

// function App() {
//   return <Greeting />;
// }

// Ex 2 - extra 4

function useLocalStorageState(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = React.useState(() => {
    const valueOnLocalStorage = localStorage.getItem(key);
    if (valueOnLocalStorage) {
      return deserialize(valueOnLocalStorage);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  // Maintining the previous key
  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    localStorage.setItem(key, serialize(state));
  }, [key, serialize, state]);

  return [state, setState];
}

function Greeting({ initialName = '' }) {
  const [name, setName] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor='name'>Name: </label>
        <input value={name} onChange={handleChange} id='name' />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
