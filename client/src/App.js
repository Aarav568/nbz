import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import Landing from "./pages/landing/landing.component";
import Explore from "./pages/explore/explore.component";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";
import CartPage from "./pages/cart/cart.component";
import Pricing from "./pages/pricing/pricing.component";
import BeatsPage from "./pages/beats/beats.component";
import SignUp from "./components/sign-up/sign-up.component";
import Login from "./components/login/login.component";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll.component";

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />   {/*  ADD TO REDUX LOACTION */}
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/beats">
            <Route path=":route" >
              <Route path=":id" element={<BeatsPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </SmoothScroll>
      <Footer />
    </>
  );
}

export default App;