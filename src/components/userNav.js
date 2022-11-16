import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function UserNav() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>User</Navbar.Brand>
        <Nav className="me-auto adminNav">
          <Link to="/user-portal/">Home</Link>
          <Link to="/user-portal/book-list">Books</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default UserNav;
