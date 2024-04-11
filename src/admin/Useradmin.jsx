import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import ModalEdit from './ModalEdit'


const Useradmin = () => {

  const URL_BASE = import.meta.env.VITE_URL_BASE


  const [users, setUser] = useState([])

  const [changeFlag, setChangeFlag] = useState(false)


  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${URL_BASE}/users`)
      setUser(data)
      

    } catch (error) {
      console.log(error)
    }
  }
  const deleteUser = async (id) => {
    try {
      const { data } = await axios.delete(`${URL_BASE}/users/${id}`)
      setChangeFlag(!changeFlag)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    getAllUsers()
  }, [changeFlag])


  return (
    <Container>
      <Row>
        <h1>Administrador de usuarios</h1>
        <Col>
          {<Table striped bordered variant='dark'>
            <thead>
              <tr>
                <th className="text-center">id</th>
                <th className="text-center">Nombre</th>
                <th className="text-center">Apellido</th>
                <th className="text-center">Email</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, i) =>
                  <tr key={i}>
                    <td className="text-center">{user.id}</td>
                    <td className="text-center">{user.name}</td>
                    <td className="text-center">{user.surname}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">
                      <Col>
                        <Button variant='danger' size='sm' className='mx-2' onClick={() => deleteUser(user.id)}>Borrar</Button>
                     

                        <ModalEdit user={user} setChangeFlag={setChangeFlag}></ModalEdit>
                      </Col>
                    </td>


                  </tr>

                )}
            </tbody>

          </Table>}
         
        </Col>
      </Row>
    </Container>
  )
}

export default Useradmin