import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'
import About from '../pages/About'
import Account from '../pages/Account'
import Dashboard from '../pages/admin/Dashboard'
import AddBlog from '../pages/admin/update/AddBlog'
import EditBlog from '../pages/admin/update/EditBlog'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductDetails from '../pages/ProductDetails'
import Search from '../pages/Search'
import Shop from '../pages/Shop'
import TeamDetails from '../pages/TeamDetails'
import Whislist from '../pages/Whislist'
import { CartProvider } from 'react-use-cart';
import { WishlistProvider } from 'react-use-wishlist';
import { ProductProvider } from '../context/ProductContext'
import {  LangProvider } from '../context/LangContext'
import Admin from '../pages/Admin'


const Main = () =>{
  const [mode] = useContext(ThemeContext);

  
  return(
   
     <div className={mode}>
       <WishlistProvider>
    <CartProvider>
   <ProductProvider>
   <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/about/:url' element={<TeamDetails/>}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:url' element={<ProductDetails/>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/add" element={<AddBlog />}></Route>
        <Route path="/dashboard/edit/:id" element={<EditBlog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Account />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/whislist' element={<Whislist />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </ProductProvider>
   </CartProvider>
    </WishlistProvider>
   
     </div>
    
  )
}


const App:React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <LangProvider>
      <ThemeProvider>
         <Main />
      </ThemeProvider>
      </LangProvider>
    </BrowserRouter>
    </>
  )
}

export default App