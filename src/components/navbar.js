import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Admin {props.data}</Navbar.Brand>
        <Nav className="me-auto adminNav">
          <Link to="/admin-portal/">Home</Link>
          <Link to="/admin-portal/book-list">Books</Link>
          <Link to="/admin-portal/user-list">Users</Link>
          <Link to="/admin-portal/add-books">Add Books</Link>
          <Link to="/admin-portal/add-user">Add users</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
