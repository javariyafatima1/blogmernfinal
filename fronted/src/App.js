import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Header from './component/Header';
import Singup from './component/Singup';
import Login from './component/Login';
import Home from './component/Home';
import Dashbord from './component/Dashbord';
import About from './component/About';
import Footer from './component/Footer';
import Blogs from './component/Blogs';
import CreateBlogs from './component/CreateBlogs';
import SingleBlog from './component/SingleBlog';


function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
        <div>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/singup" element={<Singup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashbord" element={<Dashbord />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/createblogs" element={<CreateBlogs title={"Create Blog"}/>}/>
          <Route path="/singleblogpage/:id"element={<SingleBlog/>} />
          <Route path="/updateblogpage/:id"element={<CreateBlogs title={"Update Blog"}/>} />
            
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;