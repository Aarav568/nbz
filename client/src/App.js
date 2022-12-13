import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import Landing from "./pages/landing/landing.component";
import Explore from "./pages/explore/explore.component";
import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;