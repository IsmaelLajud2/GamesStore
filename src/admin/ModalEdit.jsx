
import axios from 'axios'
import React, {  useState } from 'react'
import {  Button, Modal, Form } from 'react-bootstrap'

const ModalEdit = ({user ,setChangeFlag}) => {
    const URL_BASE = import.meta.env.VITE_URL_BASE
    const [selectedUser, setSelectedUser] = useState(user)
    const [showModalEdit, setShowModal] = useState(false);
    const handleEdit = (user) => {
        
        setShowModal(true)
      }
      const handleEditClose = () => {
       
        setShowModal(false)
      } 
      const handleSaveEdit =async () =>{
        try {
          const { data } = await axios.patch(`${URL_BASE}/users/${selectedUser.id}` ,selectedUser)
          setChangeFlag((prev => !prev))
          console.log(data)
        } catch (error) {
          console.log(error)
        } finally{
          handleEditClose()
        }
      }

    return (
        <> 
      <Button variant='warning' size='sm' onClick={() => handleEdit(user)}>Editar</Button>

            <Modal show={showModalEdit} onhide={handleEditClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Editar Informacion de usuarios</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre"
                                value={selectedUser ? selectedUser.name : ""}
                                onChange={(e) => {
                                    setSelectedUser({
                                        ...selectedUser,
                                        name: e.target.value
                                    })
                                }} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="surname">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido"
                                value={selectedUser ? selectedUser.surname : ""}
                                onChange={(e) => {
                                    setSelectedUser({
                                        ...selectedUser,
                                        surname: e.target.value
                                    })
                                }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email"
                                value={selectedUser ? selectedUser.email : ""}
                                onChange={(e) => {
                                    setSelectedUser({
                                        ...selectedUser,
                                        email: e.target.value
                                    })
                                }} />
                        </Form.Group>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditClose}>Close</Button>
                    <Button variant="primary" onClick={handleSaveEdit} >Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEdit