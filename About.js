import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classes from './About.module.css';



const About=()=>{
    return(
        <div>
        <Container>
            <div className={classes.container}>
            <Row>
                
                <Col>
                <h3>Who we really are</h3>
                <h2>About <br></br>Farmagen</h2>
                <p>Farmagen has emerged in order to provide quality seeds, easily accessible and affordable for farmers, Farmagen depends on Research and Development in the pursuit of innovation to serve its customers the best quality seeds they deserve

                </p>
                <button > Read More</button>

                </Col>
                <Col>
                <div>
                    <img src='/images/photo4.jpg' alt='doctor'></img>
                </div>
                </Col>
                
            </Row></div>
        </Container>
        </div>
    );
};
export default About;