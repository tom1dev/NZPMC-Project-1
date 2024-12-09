import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Admin from "./pages/Admin"
import SignIn from "./pages/Signin"
import Layout from "./pages/Layout";

function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="Signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
