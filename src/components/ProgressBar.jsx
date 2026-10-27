// Barra que mostra o progresso de 0 a 100
function ProgressBar({ value }) {
  return (
    <div className="progresso" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="progresso-barra" style={{ width: `${value}%` }} />
      <span>{value}%</span>
    </div>
  )
}

export default ProgressBar
