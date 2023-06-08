import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

export default function MainPage() {
   return (
      <Row>
         <Col xs={6}>
            <h1>Hello</h1>
         </Col>
         <Col xs={6}>
            <h1>Hello</h1>
         </Col>
      </Row>
   );
}

export const Head = () => <title>Home Page</title>
