import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Layout } from './components/Layout'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
        </Routes>

      </Layout>
    </BrowserRouter>
  )
}

export default App
