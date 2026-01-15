import './App.css'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <TaskForm />
          </div>
          <div className="lg:w-2/3">
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
