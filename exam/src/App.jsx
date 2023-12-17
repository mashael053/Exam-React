import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login'
import Moredetailes from './Component/Moredetailes'
import ErrorPage from './Pages/ErrorPage'

function App() {


  return (
    <>

<Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Moredetailes/:id' element={<Moredetailes/>}></Route>
    <Route path='/*' element={<ErrorPage/>}/>


</Routes>

    </>
  )
}

export default App
