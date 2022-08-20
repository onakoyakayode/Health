import React from "react"
import SignPage from "./components/SignPage/SignPage.jsx"
import SignIn from "./components/SignIn/SignIn.jsx"
import SignUp from "./components/SignUp/signUp.jsx"
import Welcome from "./components/Welcome/Welcome.jsx"
import BookApp from "./components/Book-Appointment/BookApp.jsx"
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
          <Route path='/bookapp' element={<BookApp arrow={Arrow}/>} />
        </Routes>       
      </Router>
      
     {/* <BookApp arrow={Arrow}/> */}
    </div>
  );
}

export default App;
