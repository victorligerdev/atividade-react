import { useState, useEffect, useRef } from 'react'

// Menu suspenso que fecha ao escolher ou ao clicar fora
function Dropdown({ opcoes, onSelect, rotulo }) {
  const [aberto, setAberto] = useState(false)
  const caixa = useRef(null)

  // Fecha o menu se clicar fora dele
  useEffect(() => {
    const clicarFora = (e) => {
      if (!caixa.current.contains(e.target)) setAberto(false)
    }
    document.addEventListener('click', clicarFora)
    return () => document.removeEventListener('click', clicarFora)
  }, [])

  const escolher = (opcao) => {
    onSelect(opcao)
    setAberto(false)
  }

  return (
    <div className="dropdown" ref={caixa}>
      <button aria-haspopup="true" aria-expanded={aberto} onClick={() => setAberto(!aberto)}>
        Modalidade: {rotulo} ▾
      </button>
      {aberto && (
        <ul className="dropdown-menu">
          {opcoes.map((opcao) => (
            <li key={opcao}>
              <button onClick={() => escolher(opcao)}>{opcao}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
