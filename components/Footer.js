/** @format */

import React from "react";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className='text-center bg-secondary '>
      <Card.Body>
        <Card.Title className='text-black'>Hecho por Nico</Card.Title>
        <Card.Text className='text-white'> © DivGeeks Industries</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Footer;
