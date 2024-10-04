import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coleguinhas from './components/Coleguinhas';

function App() {
  const [nome, setNome] = useState('Edward');
  const [idade, setIdade] = useState(30);

  return (
    <>
      {/* <h1>Nome: {nome}</h1>
      <h2>Idade: {idade}</h2>
      
      <div className="card">
        <button onClick={() => setNome('João')}>Mudar Nome</button>
        <button onClick={() => setIdade('17')}>Mudar Idade</button>
      </div> */}

      <Coleguinhas nome={"Angelo"} nomeCompleto={"Angelo Lustosa de Figueireido Filho"} />
      <Coleguinhas nome={"João"} nomeCompleto={"João Roberto de Oliveira Felix"} />
      <Coleguinhas nome={"Edmar"} nomeCompleto={"Edmar Albuguerque Neto"} />
      <Coleguinhas nome={"Gustavo"} nomeCompleto={"Luis Gustavo"} />
    </>
  )
}

export default App
