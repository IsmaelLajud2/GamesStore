import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row, Carousel, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Detailproducts = () => {
  const { id } = useParams()
  const [games, setGame] = useState({});

  const URL_BASE = import.meta.env.VITE_URL_BASE

  const getGame = async () => {
    try {
      const { data } = await axios.get(`${URL_BASE}/productos/${id}`)
      console.log(data)
      setGame(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getGame()
  }, [])


  return (


    <Container>
      <Row>

        {games && (
          <>
            <h1>{games.titulo}</h1>
            <Col sm={12} lg={6}>
              <Carousel>
                {games.imagenes && games.imagenes.map((img, i) => {
                  
                   if (i === 0) return
                  return(
                  <Carousel.Item key={i}>
                    <img src={img} alt={games.name} className='img-fluid' />
                  </Carousel.Item>

                  )



                })}
              </Carousel>
              </Col>
              <Col sm={12} lg={6}>
              <h5>{games.descripcion}</h5>
              {games.requisitos && (
                <ul>
                  Requisitos:
                  {Object.entries(games.requisitos).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              )}
              <h2>{games.precio}</h2>
              <Col className='d-flex justify-content-end'>
          <Button variant='secondary' size='sm'>Comprar</Button>

        </Col>
              </Col>
          </>
        )}
     
      </Row>
    </Container>

  );

}

export default Detailproducts