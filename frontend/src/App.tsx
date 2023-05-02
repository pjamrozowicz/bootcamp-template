import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const [todos] = useState<Todo[]>([
    { id: 1, task: 'Finish labels tasks', completed: false },
    { id: 2, task: 'Improve deployment speed', completed: false },
    { id: 3, task: 'Finish react bootcamp', completed: true },
    { id: 4, task: 'Complete weekly report', completed: true },


  ]);
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [currentTab, setCurrentTab] = useState<'active' | 'completed'>('active');

  useEffect(() => {
    setActiveTodos(todos.filter((todo) => !todo.completed));
    setCompletedTodos(todos.filter((todo) => todo.completed));
  }, [todos]);

  return (
    <div className="flex items-center justify-center p-12">
      <header className="text-center">
        <img src={logo} className="w-20 h-20 mx-auto" alt="logo" />
        <span
          className="text-blue-500 hover:text-blue-700 font-extrabold transition duration-150 ease-in-out text-xl block mt-4"
        >
          PJs bootcamp
        </span>
        <div className="mt-8 ">
          <div className="bg-white shadow-md rounded-lg p-6">

          <div className="flex justify-center space-x-4">
            <button
              className={`${
                currentTab === 'active'
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent text-blue-500'
              } px-4 py-2 rounded-md transition duration-150 ease-in-out`}
              onClick={() => setCurrentTab('active')}
            >
              Active
            </button>
            <button
              className={`${
                currentTab === 'completed'
                  ? 'bg-green-500 text-white'
                  : 'bg-transparent text-green-500'
              } px-4 py-2 rounded-md transition duration-150 ease-in-out`}
              onClick={() => setCurrentTab('completed')}
            >
              Completed
            </button>
          </div>
          <div className="mt-4">
            {currentTab === 'active' &&
              activeTodos.map((todo) => (
                <div key={todo.id} className="text-blue-500 mb-2">
                  {todo.task}
                </div>
              ))}
            {currentTab === 'completed' &&
              completedTodos.map((todo) => (
                <div key={todo.id} className="text-black-500 mb-2 line-through">
                  {todo.task}
                </div>
              ))}
          </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
