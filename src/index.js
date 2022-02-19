import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Cards from './Cards';
import data from "./data";
import './style.css';

const dataElements = data.map(item => {
    return (
      <Cards
        id={item.id}
        item={item}
      />
    )
})

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <main className="main">
      {dataElements}
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

