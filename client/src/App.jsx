import { Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="d-flex flex-column vh-100 bg-dark">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
