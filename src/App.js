import './App.css';
import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  const [value, setValue] = React.useState("Hello World");

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <h1>{value}</h1>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
