import "./tela-resultado.css";

export default function TelaResultado({ pontuacao, total }) {
    return (
        <div className="tela-resultado">
            <h2>Fim de Jogo!</h2>
            <p>Você acertou <span className="acertos">{pontuacao}</span> de {total} perguntas.</p>
        </div>
    )
}