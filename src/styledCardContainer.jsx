import { Col, Container, Row } from "react-bootstrap";
import StyledCard from "./styledCard";

export default function StyledCardContainer(){
    return <Container>
    <Row className='p-3'>
      <Col><StyledCard/></Col>
      <Col><StyledCard /></Col>
      <Col><StyledCard/></Col>
    </Row>
  </Container>
}