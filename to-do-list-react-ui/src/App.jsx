import './App.css'
import Task from './components/Task'

function App() {

  return (
    <section className="content">
      <h1 className="title">To Do List</h1>

      <div className="list-container">
        <Task className="task" name='Aprender React' />
        <Task className="task" name='Aprender Angular' />
      </div>
    </section>
  )

}

export default App
