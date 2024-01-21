import './App.css'
import Navbar from './components/Navbar'
import Meme from './components/Meme'

function App() {
  return (
    <div className='main-page'>
      <Navbar />
      <div className='main-content'>
          <Meme />
      </div>
    </div>
  )
}

export default App
