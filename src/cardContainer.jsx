import Cards from './Cards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
export default function CardContainer(){
 return <Container>
        <Row className='p-3'>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
        </Row>
        <Row className='p-3'>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
        </Row>
      </Container>
}