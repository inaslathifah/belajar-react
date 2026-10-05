import { useState } from "react";
import { Card, Button, Form, Table, Modal } from "react-bootstrap";

const dataUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    status: "Active",
  },
];

const ListUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(dataUsers);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
    // status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      ...formData,
      id: Date.now(),
    };

    setUsers([...users, newUser]);
    setShowModal(false);
  };

  return (
    <>
      <Card className="shadow-sm p-3 border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4 className="mb-0 fw-bold">Data User</h4>
            </div>
            <button variant="primary" onClick={handleShowModal}>
              Create New User
            </button>
          </div>
          <Table
            striped
            bordered
            hover
            responsive
            className="align-middle mb-0"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" className="me-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <div className="table-responsive"></div> */}
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                value={formData.name}
                type="text"
                name="name"
                placeholder="Masukkan nama"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={formData.email}
                type="email"
                name="email"
                placeholder="Masukkan email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={formData.password}
                type="password"
                name="password"
                placeholder="Masukkan password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListUser;
