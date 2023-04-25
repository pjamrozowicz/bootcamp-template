import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="flex items-center justify-center p-12">
      <header className="text-center">
        <img src={logo} className="w-20 h-20 mx-auto" alt="logo" />
        <p className="text-2xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 hover:underline transition duration-150 ease-in-out text-xl block mt-4"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
