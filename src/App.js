import { Route, BrowserRouter as Router } from "react-router-dom"
import {useEffect, useState} from 'react'
import Landing from "./Landing.js"
import AdminDashboard from "./AdminDashboard.js"
import Axios from 'axios'

function App() {
  const [admin, setAdmin] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    console.log('use effect')
    const token = localStorage.getItem("token")
    console.log(token)
    if (token) {
      Axios.get('http://localhost:3001/api/v1/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => {  console.log(resp)
          if (resp.data.id) {
            setAdmin(resp.data)
            setLoggedIn(true)
          }
        })
    }
  }, [])

  const handleLogin = (admin) => {
      setAdmin(admin)
      setLoggedIn(true)
  }
  const handleLogout = () => {
    localStorage.clear()
    setAdmin({})
    setLoggedIn(false)
  }
  return (
   <Router>
     <Route exact path="/"> <Landing handleLogin={handleLogin}/> </Route>
     <Route exact path="/admindashboard" component={AdminDashboard} />
   </Router>
  );
}

export default App;
