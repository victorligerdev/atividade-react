import { useState } from 'react'

// Abas que mostram um conteúdo por vez
function Tabs({ abas }) {
  const [ativa, setAtiva] = useState(0)

  return (
    <div>
      <div className="abas" role="tablist">
        {abas.map((aba, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={ativa === i}
            className={ativa === i ? 'ativa' : ''}
            onClick={() => setAtiva(i)}
          >
            {aba.titulo}
          </button>
        ))}
      </div>
      <div role="tabpanel">{abas[ativa].conteudo}</div>
    </div>
  )
}

export default Tabs
