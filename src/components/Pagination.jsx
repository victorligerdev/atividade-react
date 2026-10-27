// Botões de navegação entre páginas
function Pagination({ totalPaginas, paginaAtual, onChange }) {
  // Cria a lista 123
  const paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1)

  return (
    <nav className="paginacao" aria-label="Paginação das aulas">
      <button disabled={paginaAtual === 1} onClick={() => onChange(paginaAtual - 1)}>
        Anterior
      </button>
      {paginas.map((n) => (
        <button
          key={n}
          className={n === paginaAtual ? 'ativa' : ''}
          aria-current={n === paginaAtual ? 'page' : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
      <button disabled={paginaAtual === totalPaginas} onClick={() => onChange(paginaAtual + 1)}>
        Próxima
      </button>
    </nav>
  )
}

export default Pagination
