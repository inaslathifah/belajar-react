import { useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const _initialForm = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(_initialForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    // PreventDefault itu untuk mencegah halaman melakukan refresh ketika form di submit.
    // Dia adalah parameter dari event, jadi kita bisa memanggilnya di dalam function handleSubmit.
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
    console.log("Form submitted:", formData);
    //
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert(`Login Successful!`);
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <Card className="shadow" style={{ width: "400px" }}>
          <Card.Body className="p-4">
            <h2 className="font-weight-bold text-center mb-4">Login Form</h2>

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleSubmit}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleSubmit}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={isLoading}
                className="w-100"
                onClick={handleLogin}
              >
                {isLoading ? "Logging in..." : "Submit"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
