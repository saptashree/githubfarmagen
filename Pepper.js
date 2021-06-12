import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import classes from './pepper.module.css';

const iCon = (
    <IconContext.Provider value={{ color: "green", size: "30" }}>
      <BiCheckCircle />
    </IconContext.Provider>
  );
  const aIcon = (
    <IconContext.Provider value={{ color: "green", size: "30" }}>
      <BsArrowRight />
    </IconContext.Provider>
  );

const Pepper = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              The chili pepper, from Nahuatl chīlli, is the fruit of plants from
              the genus Capsicum which are members of the nightshade family,
              Solanaceae. Chili peppers are widely used in many cuisines as a
              spice to add heat to dishes. The substances giving chili peppers
              their intensity when ingested or applied topically are capsaicin
              and related compounds known as capsaicinoids.
            </p>
            <h3>Agronomy practices for growing Hot Pepper</h3>
            <p> {iCon} Soil {aIcon} Well drained black to medium clay loamy soil is suitable</p>
            <p> {iCon} Sowing time {aIcon} As per the regional practices and timings</p>
            <p> {iCon} Optimum temp. for germination {aIcon} 25-30°C</p>
            <p> {iCon} Transplanting {aIcon} 30-35 days after sowing</p>
            <p> {iCon} Spacing {aIcon} Row to Row: 75-90 cm, Plant to Plant: 45-60 cm</p>
            <p> {iCon}Seed rate {aIcon} 80-100 gm/acre</p>
            <p> {iCon}Preparation of Main field {aIcon} Deep ploughing and harrowing. Apply well decomposed FYM @ 7-8 tons per acre followed by harrowing to mix in the soil thoroughly. Open the ridges and furrows at required spacing. Irrigate the field one day before transplanting. Transplanting should be done late afternoon. After complete transplanting light irrigation should be given for better and quick establishment</p>
            <p> {iCon}Chemical Fertilizer {aIcon} Fertilizer requirement varies with soil fertility</p>
            <p> {iCon}First dose 6 - 8 days after transplanting {aIcon}30:50:30 NPK kg /acre</p>
            <p> {iCon} Second dose 20 - 25 days after first application {aIcon}25:50:25 NPK kg /acre Third dose 20 - 25 d</p>
            <p> {iCon}At the time of Flowering {aIcon}Sulphur (Bensulf)10 kg/acre/acre</p>
            <p> {iCon}At the time of Fruit Setting {aIcon}Spray Calcium nitrate (1% solution) at the time of flowering (increases fruit set) Spray Urea & Soluble K (1%solution each) at 15 days’ interval in harvesting time (increases no. of pickings) After 15 days of first picking add NP & K as and when required: 20:00:30 NPK kg /acre</p>
            <p> {iCon}Plant Protection {aIcon}SFollow plant protection measures as and when required Note: Recommendations may vary due to change in place and season</p>
            </Col>
          <Col>
            <img src="/images/display.jpeg" height={540} width={540} />
          </Col>
        </Row>
      </Container>
      <Container className={classes.varieteis}>
      <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/sana.jpg" height={350} width={"100%"} />
            <h4>Sana</h4>
          </Col>
          <Col>
            <img src="/images/riya.jpg" height={350} width={"100%"} />
            <h4>Riya</h4>
          </Col>
          <Col>
            <img src="/images/della.jpg" height={350} width={"100%"} />
            <h4>Della</h4>
          </Col>
        </Row>
        <Row>
          
          <Col>
            <img src="/images/mirai 20.jpg" height={350} width={"100%"} />
            <h4>Mirai</h4>
          </Col>
          <Col>
            <img src="/images/maahi.jpg" height={350} width={"100%"} />
            <h4>Maahi</h4>
          </Col>
          <Col>
            <img src="/images/diya.jpg" height={350} width={"100%"} />
            <h4>Diya</h4>
          </Col>
        </Row>
        <Row>

          <Col>
            <img src="/images/rama.jpg" height={350} width={"100%"} />
            <h4>Rama</h4>
          </Col>
          <Col>
            <img src="/images/tanu.jpg" height={350} width={"100%"} />
            <h4>Tanu</h4>
          </Col>
          <Col>
            <img src="/images/vajra.jpg" height={350} width={"100%"} />
            <h4>Vajra</h4>
          </Col>
        </Row>
        <Row>
          
          <Col>
            <img src="/images/ruby.jpg" height={350} width={"100%"} />
            <h4>Ruby</h4>
          </Col>
          <Col>
            <img src="/images/chirag.jpg" height={350} width={"100%"} />
            <h4>Chirag</h4>
          </Col>
          <Col>
            <img src="/images/billa.jpg" height={350} width={"100%"} />
            <h4>Billa</h4>
          </Col>
        </Row>
        <Row>

          <Col>
            <img src="/images/sardar.jpg" height={350} width={"100%"} />
            <h4>Sardar</h4>
          </Col>
          <Col>
            <img src="/images/missile.jpg" height={350} width={"100%"} />
            <h4>Missile</h4>
          </Col>
          <Col>
            <img src="/images/swarna.jpg" height={350} width={"100%"} />
            <h4>Swarna</h4>
          </Col>
        </Row>
        <Row>
          
          <Col>
            <img src="/images/tapsi.jpg" height={350} width={"100%"} />
            <h4>Tapsi</h4>
          </Col>
          <Col>
            
          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Pepper;
