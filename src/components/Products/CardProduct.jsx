import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ prod }) => {
  const navigate = useNavigate();
  const { titulo, id, precio, imagenes } = prod;

  return (
    <Card style={{ maxWidth: '400px', margin: '10px auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
        <Card.Img src={imagenes[0]} style={{ width: '100%', height: 'auto' }} />
      </div>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{titulo}</Card.Title>
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          Precio: {precio}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/productos/${id}`)}>Ver detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
