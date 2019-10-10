import React from 'react';
import Header from './components/Header';
import CountContainer from './components/CountContainer';
import TasksContainer from './components/TasksContainer';
import NameContainer from './components/NameContainer';
import './App.css';

export default function App() {
  return (
    <section className="container">
      <Header text="A header text" />
      <NameContainer />
      <CountContainer />
      <TasksContainer />
    </section>
  );
}
