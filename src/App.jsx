import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import Pagination from './components/Pagination'
import ProgressBar from './components/ProgressBar'
import Tabs from './components/Tabs'
import Dropdown from './components/Dropdown'
import Toast from './components/Toast'

const aulas = [
  { nome: 'Spinning', modalidade: 'Cardio', horario: '07:00' },
  { nome: 'Musculação Iniciante', modalidade: 'Força', horario: '08:00' },
  { nome: 'Muay Thai', modalidade: 'Luta', horario: '09:00' },
  { nome: 'Corrida na Esteira', modalidade: 'Cardio', horario: '10:00' },
  { nome: 'Crossfit', modalidade: 'Força', horario: '12:00' },
  { nome: 'Jiu-Jitsu', modalidade: 'Luta', horario: '14:00' },
  { nome: 'Zumba', modalidade: 'Cardio', horario: '16:00' },
  { nome: 'Levantamento de Peso', modalidade: 'Força', horario: '17:00' },
  { nome: 'Boxe', modalidade: 'Luta', horario: '18:00' },
  { nome: 'HIIT', modalidade: 'Cardio', horario: '19:00' },
  { nome: 'Funcional', modalidade: 'Força', horario: '20:00' },
  { nome: 'Karatê', modalidade: 'Luta', horario: '21:00' },
]

const planos = [
  { titulo: 'Mensal', conteudo: <><p className="preco">R$ 99/mês</p><ul><li>Acesso à musculação</li><li>Avaliação física</li></ul></> },
  { titulo: 'Trimestral', conteudo: <><p className="preco">R$ 89/mês</p><ul><li>Acesso a todas as aulas</li><li>Avaliação física</li><li>1 personal por mês</li></ul></> },
  { titulo: 'Anual', conteudo: <><p className="preco">R$ 69/mês</p><ul><li>Acesso total</li><li>Personal semanal</li><li>Camiseta grátis</li></ul></> },
]

const duvidas = [
  { titulo: 'Qual o horário de funcionamento?', conteudo: 'De segunda a sábado, das 6h às 22h.' },
  { titulo: 'Preciso de exame médico?', conteudo: 'Sim, pedimos um atestado médico na matrícula.' },
  { titulo: 'Posso cancelar o plano?', conteudo: 'Sim, com aviso de 30 dias de antecedência.' },
  { titulo: 'Tem estacionamento?', conteudo: 'Sim, gratuito para alunos.' },
]

const porPagina = 4

function App() {
  const [filtro, setFiltro] = useState('Todas')
  const [pagina, setPagina] = useState(1)
  const [meta, setMeta] = useState(0)
  const [toast, setToast] = useState(null)

  const mostrarToast = (mensagem, tipo) => setToast({ mensagem, tipo, id: Date.now() })

  const filtradas = filtro === 'Todas' ? aulas : aulas.filter((a) => a.modalidade === filtro)
  const totalPaginas = Math.ceil(filtradas.length / porPagina)
  const visiveis = filtradas.slice((pagina - 1) * porPagina, pagina * porPagina)

  const trocarFiltro = (opcao) => {
    setFiltro(opcao)
    setPagina(1)
  }

  const registrarTreino = () => {
    const nova = Math.min(meta + 20, 100)
    setMeta(nova)
    if (nova === 100) mostrarToast('Meta batida!', 'sucesso')
  }

  return (
    <>
      <header>
        <h1>EltonFit</h1>
      </header>

      <main className="grade">
        <section className="card largo">
          <h2>Aulas</h2>
          <Dropdown opcoes={['Todas', 'Cardio', 'Força', 'Luta']} onSelect={trocarFiltro} rotulo={filtro} />
          <ul className="aulas">
            {visiveis.map((a) => (
              <li key={a.nome}>
                <strong>{a.nome}</strong>
                <span>{a.modalidade} · {a.horario}</span>
                <button onClick={() => mostrarToast(`Aula de ${a.nome} reservada!`, 'sucesso')}>Reservar</button>
              </li>
            ))}
          </ul>
          <Pagination totalPaginas={totalPaginas} paginaAtual={pagina} onChange={setPagina} />
        </section>

        <section className="card">
          <h2>Planos</h2>
          <Tabs abas={planos} />
        </section>

        <section className="card">
          <h2>Meta semanal</h2>
          <ProgressBar value={meta} />
          <div className="botoes">
            <button onClick={registrarTreino}>Registrar treino</button>
            <button className="secundario" onClick={() => setMeta(0)}>Zerar</button>
          </div>
        </section>

        <section className="card">
          <h2>Notificações</h2>
          <div className="botoes">
            <button onClick={() => mostrarToast('Tudo certo!', 'sucesso')}>Sucesso</button>
            <button onClick={() => mostrarToast('Algo deu errado.', 'erro')}>Erro</button>
            <button onClick={() => mostrarToast('Nova aula amanhã.', 'info')}>Info</button>
          </div>
        </section>

        <section className="card largo">
          <h2>Dúvidas</h2>
          <Accordion itens={duvidas} />
        </section>
      </main>

      <footer>© 2026 EltonFit</footer>

      {/* key faz o timer reiniciar a cada novo toast */}
      {toast && <Toast key={toast.id} mensagem={toast.mensagem} tipo={toast.tipo} onClose={() => setToast(null)} />}
    </>
  )
}

export default App
