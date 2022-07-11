import TopBar from "./components/TopBar.jsx"
import Home from "./pages/home.jsx"
import Single from "./pages/single.jsx"
import Write from "./pages/write.jsx"
import Settings from "./pages/settings.jsx"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx"
import { useContext } from "react"
import { Context } from "./context/Context.js"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
