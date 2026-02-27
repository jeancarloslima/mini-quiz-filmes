export default function TelaResultado({ pontuacao, total }) {
    return (
        <div className="tela-resultado">
            <h2>Fim de Jogo!</h2>
            <p>Você acertou {pontuacao} de {total} perguntas.</p>
        </div>
    )
}