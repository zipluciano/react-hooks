// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Ex 1

// function Greeting() {
//   const [name, setName] = React.useState('')

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// function App() {
//   return <Greeting />
// }

// Ex 1 - extra 1

function Greeting({initialName}) {
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" value={name} />
      </form>
      <strong>Hello {name}</strong>
    </div>
  )
}

function App() {
  return <Greeting initialName="Kody" />
}

export default App
