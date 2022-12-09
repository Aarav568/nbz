import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import Landing from "./pages/landing/landing.component";

function App() {
  const dispatch = useDispatch()

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;