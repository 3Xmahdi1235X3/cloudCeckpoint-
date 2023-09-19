import Card from 'react-bootstrap/Card';

function CardCustom({
    pic,
    title
}) {
  return (
    <Card style={{ }} className=''>
        <center>     <Card.Img src={pic} style={{ width: '30%' }}/>
</center>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, id est laborum.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardCustom;