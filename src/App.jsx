import { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {

  return (
    <>
      <Sidebar />
      <div id="section1">
        <h1>Section 1</h1>
        <p>Section 1 content</p>
      </div>
    </>
  )
}

export default App
