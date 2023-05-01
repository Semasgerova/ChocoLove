import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from '../pages/About'
import Account from '../pages/Account'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:url' element={<ProductDetails/>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App