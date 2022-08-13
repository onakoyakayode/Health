import React, { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

  const [show, setShow] = useState(false)

  const [formData, setFormData] = useState({
    hospital: "",
    service: "",
    date: "",
    time: "",
    delivery: "",
  })

  function handleChange(event) {
    const {name, value, checked, date, time, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "radio" ? checked:value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
  }

  const styles = {
    backgroundColor: show ? "#FFFFFF" : "#001011",
    boxShadow: show ? "2px 2px 19px 4px rgba(0, 0, 0, 0.286)" : "none"
  }

  return (
    <div style={styles} className="App">
      {
        show === false ? <Header open={setShow}/> : 
        <Main 
          value={formData.value} 
          select={formData.select} 
          change={handleChange}
          handleSubmit={handleSubmit}
        />
      }
      

    </div>
  );
}

export default App;
