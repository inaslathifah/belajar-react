import { useState } from "react";
import { Card, Button, Form, Table, Modal } from "react-bootstrap";

const dataCategories = [
  { id: 1, name: "Elektronik", description: "Perangkat elektronik" },
  { id: 2, name: "Pakaian", description: "Baju, celana, dan aksesori" },
  { id: 3, name: "Makanan", description: "Makanan dan minuman" },
];

const _initForm = {
  id: null,
  name: "",
  description: "",
};

const Category = () => {
  const [categories, setCategories] = useState(dataCategories);
  const [formData, setFormData] = useState(_initForm);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = () => {
    setFormData(_initForm);
    setIsEdit(false);
    setShowModal(true);
  };

  const handleEditModal = (category) => {
    setFormData(category);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      setCategories(
        categories.map((c) => (c.id === formData.id ? formData : c)),
      );
    } else {
      const newCategory = { ...formData, id: Date.now() };
      setCategories([...categories, newCategory]);
    }

    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus kategori ini?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <>
      <Card className="shadow-sm p-3 border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 fw-bold">Data Category</h4>
            <Button variant="primary" onClick={handleShowModal}>
              Create New Category
            </Button>
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
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center text-muted">
                    Belum ada kategori
                  </td>
                </tr>
              ) : (
                categories.map((category, index) => (
                  <tr key={category.id}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                    <td>
                      <Button
                        onClick={() => handleEditModal(category)}
                        variant="warning"
                        size="sm"
                        className="me-2"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(category.id)}
                        variant="danger"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEdit ? "Edit Category" : "Create New Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="categoryForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formCategoryName">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama kategori"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategoryDescription">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Masukkan deskripsi"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button type="submit" form="categoryForm" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Category;
