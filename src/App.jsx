import Menu from './components/layouts/Menu.jsx'
import Content from './components/layouts/Content.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Menu />
          <Content />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
