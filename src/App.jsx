import React from 'react';
import Headline from './Headline';
import CountContainer from './components/CountContainer';
import TasksContainer from './components/TasksContainer';
import NameContainer from './components/NameContainer';
import './App.css';


export default function App() {
  return (
    <section className="container">

      <div className="padder">
        <Headline text="A random headline" />
      </div>
      <NameContainer />
      <CountContainer />
      <TasksContainer />

    </section>
  );
}
