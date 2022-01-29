import React from 'react';
import CrudApi from './components/CrudApi';
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <h1>Ejercicio con React - Json Server</h1>
      <CrudApi/>
      <hr/>
      <h1>Ejecicio con React.</h1>
      <CrudApp/>
    </>
  );
}

export default App;
