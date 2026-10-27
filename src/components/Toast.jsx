import { useEffect } from 'react'

// Aviso que some sozinho depois de 3 segundos
function Toast({ mensagem, tipo, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer) // limpa o timer
  }, [])

  return (
    <div className={`toast ${tipo}`} role="status">
      {mensagem}
      <button aria-label="Fechar aviso" onClick={onClose}>×</button>
    </div>
  )
}

export default Toast
