import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('grid')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const handleClick = (row, col) => {
  const newGrid = grid.map(row =>row.slice());
  newGrid[row][col] ='X';
  setGrid(newGrid);
};