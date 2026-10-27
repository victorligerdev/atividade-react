import { useState } from 'react'

// Lista de perguntas onde só uma fica aberta por vez
function Accordion({ itens }) {
  const [aberto, setAberto] = useState(null)

  return (
    <div className="accordion">
      {itens.map((item, i) => (
        <div key={i}>
          <button
            className="accordion-titulo"
            aria-expanded={aberto === i}
            onClick={() => setAberto(aberto === i ? null : i)}
          >
            {item.titulo}
            <span>{aberto === i ? '−' : '+'}</span>
          </button>
          <div className={`accordion-conteudo ${aberto === i ? 'aberto' : ''}`}>
            <p>{item.conteudo}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
