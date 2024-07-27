import { Modal, Button, Alert } from 'react-bootstrap'
import Sidebar from '../../layout/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useProductContext } from '../../context/ProductsContext'

const Admin = () => {
  const { products, showSuccess, showConfirm, confirmDelete, handleConfirmClose, handleConfirmDelete } =
    useProductContext()
  const navigate = useNavigate()

  return (
    <div className='d-flex'>
      <Sidebar />
      <div className='container my-5'>
        {showSuccess && <Alert variant='success'>Product deleted successfully!</Alert>}
        <div className='table-responsive'>
          <table className='table table-bordered table-hover'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Title</th>
                <th scope='col'>Price</th>
                <th scope='col'>Description</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className='btn-group' role='group' aria-label='Basic example'>
                      <button
                        className='btn btn-outline-warning btn-sm me-2'
                        onClick={() => navigate(`/update-product/${item.id}`)}
                      >
                        <i className='bi bi-pencil-square'></i> Edit
                      </button>
                      <button className='btn btn-outline-danger btn-sm' onClick={() => confirmDelete(item.id)}>
                        <i className='bi bi-trash'></i> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal show={showConfirm} onHide={handleConfirmClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleConfirmClose}>
              Cancel
            </Button>
            <Button variant='danger' onClick={handleConfirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Admin
