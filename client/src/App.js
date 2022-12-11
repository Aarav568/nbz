import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import Landing from "./pages/landing/landing.component";
import Explore from "./pages/explore/explore.component";

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;