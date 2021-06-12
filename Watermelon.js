import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

const Watermelon=()=>{
return(
  <div>
<Container>
    <Row>
        <Col>
        <h3>Description</h3>
        </Col>
    </Row>
    <Col>
    <img src="/images/photo7.jpeg" height={540} width={540} />

    </Col>
</Container>
  </div>  
);

};
export default Watermelon;