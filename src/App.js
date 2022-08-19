import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import SignPage from "./components/SignPage/SignPage"
import SignIn from "./components/SignIn/SignIn.jsx"
import SignUp from "./components/signUp/signUp.jsx"
import Welcome from "./components/Welcome/Welcome.jsx"
import Arrow from "../src/icons/arrow-left.svg"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
        </Routes>
        <Routes>
          <Route path='/signpage' element={<SignPage arrow={Arrow}/>} />
        </Routes>
        <Routes>
          <Route path='/signin' element={<SignIn arrow={Arrow}/>} />
        </Routes>
        <Routes>
          <Route path='/signup' element={<SignUp arrow={Arrow}/>} />
        </Routes>
        <Routes>
          <Route path="/header" element={<Header />}/>
        </Routes>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
        
      </Router>
      

    </div>
  );
}

export default App;
