import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
    }

    salvarDados = () => {
      localStorage.setItem('inputValue', this.state.tarefas.texto)
      
     }

     pegarDados = () => {
      
  
      const dados = localStorage.getItem('inputValue')
      this.setState({inputValue: dados})
      console.log(dados)

     }
  componentDidUpdate() {
     this.salvarDados()
  };

  componentDidMount() {
   this.pegarDados()
  };

  onChangeInput = (event) => {
    this.setState ({inputValue: event.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = 
    {id:Date.now(), 
    texto: this.state.inputValue,
    completa: false,
     } 
     const tarefaNova = [...this.state.tarefas, novaTarefa]
     
     this.setState({tarefas: tarefaNova})
     const tarefaConvertida = JSON.stringify(tarefaNova)
     localStorage.setItem('texto', tarefaConvertida)
  }

  selectTarefa = (id) => {
   
    const alterarTarefa = this.state.tarefas.map((tarefas1) => {
       if(id === tarefas1.id){
        const tarefa = {...tarefas1, completa: !tarefas1.completa}
        return tarefa
       }
       else {
        return tarefas1
       }
    })
    this.setState({tarefas: alterarTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
