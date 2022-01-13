import logo from './logo.svg';
import './App.css';
import {Welcome} from './components/Home'
import {Login} from './components/Login'
import {Route,Routes} from "react-router-dom"
import NavBar from './components/NavBar'
import {Dashboard} from './components/Dashboard'
import {PrivateRoute} from './components/PrivateRoute'
import {Setting} from './components/Settings'
 function App() {
  return (
    <div className="App">
      <NavBar />
<Routes>
<Route path="/" element={ <Welcome />}/>
<Route path="/login" element={ <Login />}/>

<Route path="/dashboard" element={ <PrivateRoute><Dashboard /></ PrivateRoute>}/>
<Route path="/dashboard/setting" element={ <PrivateRoute><Setting /></ PrivateRoute>}/>
</Routes>
   
    
    </div>
  );
}

export default App;
