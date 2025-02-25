import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Navbar bg="black" className="mb4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="text-white text-decoration-none">
            Chat App
          </Link>
        </h2>

        <span className="text-warning">
          {user ? `Logged in as ${user.name}` : "Welcome to Chat App"}
        </span>

        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user && (
              <Link
                to="/login"
                className="text-white text-decoration-none"
                onClick={logoutUser}
              >
                Logout
              </Link>
            )}
            {!user && (
              <Link to="/login" className="text-white text-decoration-none">
                Login
              </Link>
            )}
            {!user && (
              <Link to="/register" className="text-white text-decoration-none">
                Register
              </Link>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
