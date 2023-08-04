import './App.css'
import Menu from './components/Menu.jsx'
import Feed from './components/Feed.jsx'
import Happening from './components/Happening'

function App() {

  return (
    <div className="flex flex-row">
      <Menu />
      <Feed />
      <Happening />
    </div>
  )
}

export default App
