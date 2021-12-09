import { useState } from "react"
import './Styles/app.scss';
import { Routes, Route } from "react-router-dom"
import AlertContext from "./Contexts/AlertContext"
import SignIn from "./Pages/Login/SignIn"
import SignUp from "./Pages/Login/SignUp"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Alert from "./Components/Services/Alert"

function App() {
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    title: "",
    message: ""
  })

  return (
    <AlertContext.Provider value={{alertInfo, setAlertInfo}}>
      <div className="App">
      <Alert />
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </AlertContext.Provider>
  );
}

export default App;
