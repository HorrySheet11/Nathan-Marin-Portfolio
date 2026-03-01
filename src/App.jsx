import Sidebar from './components/Sidebar'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <>
      <Sidebar />      
      <AboutMe />
      <hr className="bg-linear-to-t from-blue-700 to-cyan-500 h-3 w-3/4 mx-auto rounded-md border-inherit"/>
      
    </>
  )
}

export default App
