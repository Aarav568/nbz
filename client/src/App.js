import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import Landing from "./pages/landing/landing.component";
import Explore from "./pages/explore/explore.component";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";
import CartPage from "./pages/cart/cart.component";
import Pricing from "./pages/pricing/pricing.component";

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />   {/*  ADD TO REDUX LOACTION */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;