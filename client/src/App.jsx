import { Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import NavBar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column vh-100 bg-dark">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />} />
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="/register" element={user ? <Chat /> : <Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
