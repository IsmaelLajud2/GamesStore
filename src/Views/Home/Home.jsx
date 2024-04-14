import React ,{useState,useEffect} from 'react'
import './Homestyles.css'
import { Col, Container, Row, Carousel, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const URL_BASE = import.meta.env.VITE_URL_BASE
  const { id } = useParams()
 const [games, setGames] = useState([]) 

 const getGame = async () => {
  try {
    const { data } = await axios.get(`${URL_BASE}/productos`)
    console.log(data)
    setGames(data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  getGame()
}, [])

  return (
    <> 
     
    <div className='background'>
   
    <Container>
      <Row>
    
     
      {games && (
        <>
          <h1>{games.titulo}</h1>
          <Col sm={30} lg={13}>
          <Carousel>
          {games && games.map((game, index) => (
  <Carousel.Item key={index}>
    <h3 className='d-flex justify-content-center '>{game.titulo}</h3>
    {game.imagenes.length > 0 && (
      <img src={game.imagenes[0]} alt={`Imagen`} className="img-fluid" />
    )}
  </Carousel.Item>
))}
</Carousel>
          </Col>
        </>
      )}
       </Row>
    </Container>
    </div>
  </>
);
};


export default Home