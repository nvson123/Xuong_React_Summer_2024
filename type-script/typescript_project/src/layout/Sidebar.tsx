import '../App.css'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <div className='d-flex flex-column vh-100 bg-light p-3 border-end sidebar'>
      <h4>Admin Panel</h4>
      <Nav className='flex-column'>
        <Nav.Link as={Link} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={Link} to='/add-product'>
          Add
        </Nav.Link>
        <Nav.Link as={Link} to='/register'>
          Register
        </Nav.Link>
        <Nav.Link as={Link} to='/login'>
          Login
        </Nav.Link>
        <Nav.Link as={Link} to='/logout'>
          Logout
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default Sidebar
