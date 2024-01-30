import './App.css';
import {BrowserRouter as Router,Route ,Routes }from "react-router-dom";
import {Login} from './pages/signup';
import {Home} from './pages/home';
import {Message} from './pages/message';
import {AddPost} from './pages/addpost';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/addpost" element={<AddPost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
