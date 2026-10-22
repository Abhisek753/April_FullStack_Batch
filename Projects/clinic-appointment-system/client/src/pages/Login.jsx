import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
  Form,
  Input,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await data.json();
      console.log(result);
      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <Container className="py-5 mt-5 bg-gray-400">
      <Row className="justify-content-center">
        <Col md="6" lg="5">
          <Card>
            <CardBody>
              <CardTitle tag="h2" className="mb-4">
                Sign in
              </CardTitle>
              <p className="text-muted">Please enter your credentials to sign in.</p>
              <Form onSubmit={handleSubmit}>
                
                <FormGroup>
                  <Label for="registerEmail">Email</Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    value={email}
                    className="form-control"
                    name="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="registerPassword">Password</Label>
                  <Input
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    className="form-control"
                    name="password"
                    id="registerPassword"
                    placeholder="Enter your password"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  color="primary"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </Form>
              <p className="text-center mt-3 mb-0 text-muted">
              New Patient? <Link to="/register">Create account</Link>
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
