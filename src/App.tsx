
// import Login from "./components/login";
// import Admin from "./components/admin-dashboard";
import { Routes,Route } from "react-router";
import Signup from "./components/signup";
import Admin from "./components/admin-dashboard";
import Login from "./components/login";
import TeamLead from "./components/team-lead";
function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Signup></Signup>} />
    <Route path='/login' element={<Login></Login>}/>
    <Route path='/admin' element={<Admin></Admin>}/>
    <Route path='/team-lead' element={<TeamLead></TeamLead>}/>
    
    </Routes>
   
  {/* <Login></Login> */}
  {/* <Signup></Signup> */}
    {/* <Admin></Admin> */}
    </>
  )
}

export default App
