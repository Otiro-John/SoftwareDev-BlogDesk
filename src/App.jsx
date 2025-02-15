import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import AddBlog from './Pages/BlogDetails/AddBlog'
import ViewBlog from './Pages/BlogDetails/ViewBlog'
import BlogList from './Pages/BlogDetails/BlogList'
import { AuthProvider } from './Pages/Context/AuthContext'
import Login from './Pages/Login'
const App = () => {
  return (
    <AuthProvider>
         <div className="main">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/BlogDetails/AddBlog' element={<AddBlog/>}/>
      <Route path='/BlogDetails/ViewBlog' element={<ViewBlog/>}/>
      <Route path="/view/:id" element={<ViewBlog />}/>
      <Route path='/BlogDetails/BlogList' element={<BlogList/>}/>
     </Routes>
    </div>
    </AuthProvider>
  )
}

export default App