export default function CardPergunta({ pergunta, onResponder }) {
    return (
        <div className="cartao-pergunta">
            <h2>{pergunta.texto}</h2>

            <div className="opcoes">
                {pergunta.opcoes.map((opcao, index) => (
                    <button key={index} onClick={() => onResponder(opcao)}>
                        {opcao}
                    </button>
                ))}
            </div>
        </div>
    )
}