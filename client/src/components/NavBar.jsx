import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="mb4" style={{ height: "3.75rem" }}>
      <Container>
        <h2>
          <Link to="/" className="text-white text-decoration-none">
            Chat App
          </Link>
        </h2>

        <span className="text-warning">Login as Fusodoya</span>

        <Nav>
          <Stack direction="horizontal" gap={3}>
            <Link to="/login" className="text-white text-decoration-none">
              Login
            </Link>
            <Link to="/register" className="text-white text-decoration-none">
              Register
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
