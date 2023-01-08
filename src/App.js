
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Login from "../src/Pages/Login/Login"
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Reviews from './Pages/Home/Reviews';
import NotFound from './Pages/Shared/NotFound';
import RequirAuth from './Pages/Login/RequirAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyTools from './Pages/Dashboard/MyTools';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AllUsers from './Pages/Dashboard/AllUsers';
import MyPortfolio from './Portfolio/MyPortfolio';

function App() {
  return (
    <div>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/reviews' element={<Reviews/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/purchase/:purchaseId' element={
      <RequirAuth>
        <Purchase/>
      </RequirAuth>
    }/>
    <Route path='/dashboard' element={
      <RequirAuth>
        <Dashboard/>
      </RequirAuth>
    }>
      <Route index element={<MyTools></MyTools>}></Route>
      <Route path='review' element={<MyReview></MyReview>}></Route>
      <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
      <Route path='users' element={<AllUsers></AllUsers>}></Route>
    </Route>
     <Route path='*' element={<NotFound/>}/>
     <Route path='/portfolio' element={<MyPortfolio/>}/>
  </Routes>
  
  <ToastContainer />
  <Footer/>
    </div>
  );
}

export default App;
