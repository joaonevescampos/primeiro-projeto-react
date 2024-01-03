import './App.css';
import ArCondicionado from './componentes';

function App() {
  const formatarNome = (nome, sobrenome) => {
    return `${nome.toUpperCase()} ${sobrenome.toUpperCase()}`
  }

  return (
    <div className="App">
      <ArCondicionado />
    </div>
  );
}

export default App;