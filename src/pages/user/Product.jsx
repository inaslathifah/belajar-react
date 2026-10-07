import { useState } from "react";
import { Card, Button, Form, Table, Modal } from "react-bootstrap";

// Nanti bisa diganti dengan data dari Category.jsx / API
const categoryOptions = ["Elektronik", "Pakaian", "Makanan"];

const dataProducts = [
  {
    id: 1,
    name: "Headphone Bluetooth",
    category: "Elektronik",
    price: 350000,
    stock: 25,
  },
  {
    id: 2,
    name: "Kaos Polos",
    category: "Pakaian",
    price: 75000,
    stock: 120,
  },
  {
    id: 3,
    name: "Keripik Singkong",
    category: "Makanan",
    price: 15000,
    stock: 0,
  },
];

const _initForm = {
  id: null,
  name: "",
  category: "",
  price: "",
  stock: "",
};

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const Product = () => {
  const [products, setProducts] = useState(dataProducts);
  const [formData, setFormData] = useState(_initForm);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleShowModal = () => {
    setFormData(_initForm);
    setIsEdit(false);
    setShowModal(true);
  };

  const handleEditModal = (product) => {
    setFormData(product);
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

    // input number menghasilkan string, ubah ke number sebelum disimpan
    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    if (isEdit) {
      setProducts(products.map((p) => (p.id === payload.id ? payload : p)));
    } else {
      setProducts([...products, { ...payload, id: Date.now() }]);
    }

    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <>
      <Card className="shadow-sm p-3 border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0 fw-bold">Data Product</h4>
            <Button variant="primary" onClick={handleShowModal}>
              Create New Product
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
                <th>Kategori</th>
                <th>Harga</th>
                <th>Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-muted">
                    Belum ada produk
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{formatRupiah(product.price)}</td>
                    <td className={product.stock === 0 ? "text-danger" : ""}>
                      {product.stock === 0 ? "Habis" : product.stock}
                    </td>
                    <td>
                      <Button
                        onClick={() => handleEditModal(product)}
                        variant="warning"
                        size="sm"
                        className="me-2"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(product.id)}
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
            {isEdit ? "Edit Product" : "Create New Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="productForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama produk"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductCategory">
              <Form.Label>Kategori</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Pilih kategori</option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Masukkan harga"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProductStock">
              <Form.Label>Stok</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Masukkan jumlah stok"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button type="submit" form="productForm" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
