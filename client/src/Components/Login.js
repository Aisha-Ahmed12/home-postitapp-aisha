import { Container, Form, Input, Row, Col, Label, Button } from "reactstrap";
import logo from "../Images/loginImage.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Label for="email">Email</Label>
            <Col md={3}>
              <Input
                id="emaile"
                name="email"
                placeholder="Enter email..."
                type="email"
              />
            </Col>
          </Row>
          <Label for="password">Password</Label>
          <Row>
            <Col md={3}>
              <Input
                id="password"
                name="password"
                placeholder="Enter password..."
                type="password"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <br></br>
              <Button>Login</Button>
              <p className="smalltext">
                No Account?<Link to="/Register">Sign Up Now</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
