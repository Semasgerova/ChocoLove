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
import Search from '../pages/Search'
import Shop from '../pages/Shop'
import TeamDetails from '../pages/TeamDetails'
import Whislist from '../pages/Whislist'


const App = () => {
  return (
    <>
    <BrowserRouter>
 <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/about/:url' element={<TeamDetails/>}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:url' element={<ProductDetails/>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Account />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/whislist' element={<Whislist />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App