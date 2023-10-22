import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentValue, setCurrentValue] = useState('');
  const [sum, setSum] = useState(0);
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    const numberToAdd = parseFloat(currentValue);
    if (isNaN(numberToAdd)) {
      alert('Por favor, insira um número válido!');
      return;
    }
    setSum(prevSum => prevSum + numberToAdd);
    setHistory(prevHistory => [...prevHistory, numberToAdd]);
    setCurrentValue('');
  };

  return (
    <div className="App">
      <h1>Calculadora de Soma</h1>
      <input
        type="text"
        value={currentValue}
        onChange={e => setCurrentValue(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
      <h2>Valor atual da soma: {sum}</h2>
      <h3>Histórico:</h3>
      <ul>
        {history.map((item, index) => (
          item > 0 ? <p key={index}>+{item}</p> : <p key={index}>{item}</p>
        ))}
      </ul>
    </div>
  );
}

export default App;
