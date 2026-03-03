import { useState } from 'react'
import './App.css'
import CardPergunta from './components/CardPergunta';
import TelaResultado from './components/TelaResultado';

const perguntas = [
  {
    texto: 'Quem dirigiu o filme "Interstellar"?',
    opcoes: ['Quentin Tarantino', 'Christopher Nolan', 'Steven Spielbierg', 'Nenhum desses'],
    respostaCorreta: 'Christopher Nolan'
  },
  {
    texto: 'Qual o filme com mais indicações ao Oscar?',
    opcoes: ['Pecadores', 'La La Land', 'Oppenheimer', 'Nenhum desses'],
    respostaCorreta: 'Pecadores'
  },
  {
    texto: 'Qual foi o primeiro filme a ganhar o Oscar de melhor filme?',
    opcoes: ['Sétimo Céu', '2001: Uma Odisséia no Espaço', 'Asas', 'Nenhum desses'],
    respostaCorreta: 'Asas'
  },
  {
    texto: 'Quem é o ator/atriz com mais indicações ao Oscar?',
    opcoes: ['Jack Nicholson', 'Katharine Hepburn', 'Leonardo DiCaprio', 'Nenhum desses'],
    respostaCorreta: 'Nenhum desses'
  },
  {
    texto: 'Qual foi o primeiro filme de super herói a ser indicado ao Oscar de melhor filme?',
    opcoes: ['Pantera Negra', 'Batman: O Cavaleiro das Trevas', 'Superman (1978)', 'Nenhum desses'],
    respostaCorreta: 'Pantera Negra'
  },
  {
    texto: 'Qual o nome do personagem de Edward Norton (protagonista) em "Clube da Luta"?',
    opcoes: ['Tyler Durden', 'John Doe', 'Narrador', 'Alan Wake'],
    respostaCorreta: 'Narrador'
  },
  {
    texto: 'Qual desses atores não está em "O Poderoso Chefão"?',
    opcoes: ['Daniel Day-Lewis', 'Marlon Brando', 'Al Pacino', 'Nenhum desses'],
    respostaCorreta: 'Daniel Day-Lewis'
  },
  {
    texto: 'Quem dirigiu o filme "Pulp Fiction"?',
    opcoes: ['Francis Ford Coppola', 'Denis Villeneuve', 'Quentin Tarantino', 'Nenhum desses'],
    respostaCorreta: 'Quentin Tarantino'
  },
  {
    texto: 'Qual desses filmes é dividido em dois volumes?',
    opcoes: ['Drive', 'Batman: O Cavaleiro das Trevas', 'Matrix', 'Nenhum desses'],
    respostaCorreta: 'Nenhum desses'
  },
  {
    texto: 'Por qual filme Leonardo DiCaprio ganhou seu primeiro Oscar de melhor ator?',
    opcoes: ['Ilha do Medo', 'O Lobo de Wall Street', 'A Origem', 'Nenhum desses'],
    respostaCorreta: 'Nenhum desses'
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
