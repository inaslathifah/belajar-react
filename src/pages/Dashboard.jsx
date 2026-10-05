import { Card, Container, Row, Col } from "react-bootstrap";
import AppNavbar from "../component/AppNavbar";

const Dashboard = () => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow-sm p-3 border-0">
              <Card.Subtitle className="mb-2 text-muted">
                All Sales
              </Card.Subtitle>
              <Card.Title className="fs-3 fw-bold text-success">
                Rp 50.000.000
              </Card.Title>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm p-3 border-0">
              <Card.Subtitle className="mb-2 text-muted">
                Pending Orders
              </Card.Subtitle>
              <Card.Title className="fs-3 fw-bold text-warning">
                Rp 25.000.000
              </Card.Title>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm p-3 border-0">
              <Card.Subtitle className="mb-2 text-muted">
                Completed Orders
              </Card.Subtitle>
              <Card.Title className="fs-3 fw-bold text-info">
                Rp 75.000.000
              </Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
