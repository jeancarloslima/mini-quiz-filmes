import { useState } from 'react'
import './App.css'
import CardPergunta from './components/CardPergunta';
import TelaResultado from './components/TelaResultado';

const perguntas = [
  {
    texto: 'Quem dirigiu o filme Interstellar?',
    opcoes: ['Quentin Tarantino', 'Christopher Nolan', 'Steven Spielbierg', 'Nenhum desses'],
    respostaCorreta: 'Christopher Nolan'
  },
  {
    texto: 'Qual o filme com mais indicações ao Oscar?',
    opcoes: ['Pecadores', 'La La Land', 'Oppenheimer', 'Nenhum desses'],
    respostaCorreta: 'Pecadores'
  }
]

function App() {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const lidarComResposta = (opcaoEscolhida) => {
    if (opcaoEscolhida === perguntas[perguntaAtual].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = perguntaAtual + 1;

    if (proximaPergunta < perguntas.length) {
      setPerguntaAtual(proximaPergunta);
    } else {
      setMostrarResultado(true);
    }
  }

  return (
    <div className="app-container">
      {!mostrarResultado ? (
        <CardPergunta pergunta={perguntas[perguntaAtual]} onResponder={lidarComResposta} />
      ) : (
        <TelaResultado pontuacao={pontuacao} total={perguntas.length} />
      )}
    </div>
  )
}

export default App
