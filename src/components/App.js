import Header from './Header'
import Main from './Main'
import '../styles/App.css'

const App = () => {
  let dadosPessoais = {
    nome: 'João',
    idade: 23,
    sexo: 'masculino'
  }

  const { nome, idade, sexo } = dadosPessoais
  
  return (
    <>
      < Header nome={nome} idade={idade} sexo={sexo} />
      < Main />
    </>
  )
}

export default App
