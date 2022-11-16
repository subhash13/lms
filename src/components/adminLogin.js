import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminLogin = (props) => {

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let navigate = useNavigate()

    let handleSubmit = () =>{
        if ((email == props.data) && (password == 1234)) {
            navigate("/admin-portal")
        } else {
            alert("invalid username or password")
        }
    }
  return (
    <section className="adminLogin">
      <h1>Admin Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default AdminLogin;
