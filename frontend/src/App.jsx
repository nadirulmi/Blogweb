import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Myblog } from './components/myBlog/MyBlog';
import { Detail } from './components/detail/Detail';
import { Navbar } from './components/navBar/NavBar';
import { UserLogin } from './components/userLogin/userLogin';
import { Footer } from './components/footer/Footer';
function App() {
 

  return (
    <div>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Myblog />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/users" element={<UserLogin />} />
      </Routes>
      <Footer/>
  </div>
  );
}

export default App;
