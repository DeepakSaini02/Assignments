import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Navbar} from './components/Navbar'
import {Contactus} from './components/Contactus'
import {Users} from './components/Users'
import {UserDetails} from './components/UserDetails'
function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contactus" element={<Contactus/>}></Route>
      <Route path="/users" element={<Users/>}></Route>  
      <Route path="/users/:userid" element={<UserDetails/>}></Route>  
      <Route path="*" element={<div>404 page not found </div>} ></Route>    
    </Routes>
    </div>
  );
}

export default App;
