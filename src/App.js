import { Route, BrowserRouter as Router } from "react-router-dom"
import Landing from "./Landing.js"
import AdminDashboard from "./AdminDashboard.js"


function App() {
  return (
   <Router>
     <Route exact path="/" component={Landing} />
     <Route exact path="/admindashboard" component={AdminDashboard} />
   </Router>
  );
}

export default App;
