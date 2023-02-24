//React Imports
import { Routes, Route } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { lazy } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//Normal ROutes
import SmoothScroll from "./components/smooth-scroll/smooth-scroll.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import GenreForm from "./components/dashboard/genre/genre-form.component";
import ArtistForm from "./components/dashboard/artist/artist-form.component";
import BeatForm from "./components/dashboard/beat/beat-form.component";
import PlaylistForm from "./components/dashboard/playlist/playlist-form.component";

//LAZY ROUTES
const LandingLazy = lazy(() => import("./pages/landing/landing.component"))
const ExploreLazy = lazy(() => import("./pages/explore/explore.component"))
const CartPageLazy = lazy(() => import("./pages/cart/cart.component"))
const PricingLazy = lazy(() => import("./pages/pricing/pricing.component"))
const BeatsPageLazy = lazy(() => import("./pages/beats/beats.component"))
const SignUpLazy = lazy(() => import("./components/sign-up/sign-up.component"))
const LoginLazy = lazy(() => import("./components/login/login.component"))
const PayPalLazy = lazy(() => import("./components/paypal/paypal.component"))
const OrdersPageLazy = lazy(() => import("./pages/orders/orders.component"))

function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <Routes location={location} >
          <Route path="/" element={<LandingLazy />} />
          <Route path="/explore" element={<ExploreLazy />} />
          <Route path="/cart" element={<CartPageLazy />} />
          <Route path="/pricing" element={<PricingLazy />} />
          <Route path="/beats">
            <Route path=":route" >
              <Route path=":id" element={<BeatsPageLazy />} />
            </Route>
          </Route>
          <Route path="/login" element={<LoginLazy />} />
          <Route path="/signup" element={<SignUpLazy />} />
          <Route path="/checkout" element={<PayPalLazy />} />
          <Route path="/orders" element={<OrdersPageLazy />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="create">
            <Route path="genre" element={<GenreForm />} />
            <Route path="artist" element={<ArtistForm />} />
            <Route path="beat" element={<BeatForm />} />
            <Route path="playlist" element={<PlaylistForm />} />
          </Route>

        </Routes>
      </SmoothScroll>
      <Footer />
    </>
  );
}

export default App;