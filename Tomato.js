import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./Tomato.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { BsArrowRight } from "react-icons/bs";

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
const Tomato = () => {
  return (
    <div className={classes.tomato}>
      <Container>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>
              Tomato, Lycopersicum esculentum (syn. Solanum lycopersicum and
              Lycopersicon lycopersicum) is an herbaceous annual in the family
              Solanaceae grown for its edible fruit. The plant can be erect with
              short stems or vine-like with long, spreading stems. The stems are
              covered in coarse hairs and the leaves are arranged spirally. The
              tomato plant produces yellow flowers, which can develop into a
              cyme of 3–12, and usually a round fruit (berry) which is fleshy,
              smoothed skinned and can be red, pink, purple, brown, orange or
              yellow in color. The tomato plant can grow 0.7–2 m (2.3–6.6 ft) in
              height and as an annual, is harvested after only one growing
              season. Tomato may also be referred to as love apple and
              originates from South America.
            </p>
          </Col>
          <Col>
            <img height={300} width={500} src={"/images/photo5.jpg"} />
          </Col>
        </Row>
      </Container>
      <Container className={classes.description}>
        <Row>
          <Col>
            <h3>Tips for Growing Tomato</h3>
            <p>
              {iCon} Soil {aIcon}A well-drained loamy soil is ideal
            </p>
            <p>
              {iCon} Sowing time{aIcon}As per the regional practices and timings
            </p>
            <p>
              {iCon} Optimum temp for germination{aIcon}25 - 30°C
            </p>
            <p>
              {iCon} Transplanting {aIcon}25-30 days after sowing
            </p>
            <p>
              {iCon} Spacing {aIcon}Row to Row: 90 cm, Plant to Plant : 45 - 60
              cm
            </p>
            <p>
              {iCon}Seed rate {aIcon}50 - 60 gm / acre
            </p>
            <p>
              {iCon} Preparation of Main field {aIcon}Deep ploughing and
              harrowing. Add well decomposed FYM: 8-10 tones / acre. Make the
              ridges and furrows at the required spacing. Irrigate the field and
              make the holes at the recommended spacing. Transplanting should be
              done during late afternoon, after transplanting light irrigation
              should be given for quick and better establishment
            </p>
            <p>
              {iCon}Chemical Fertilizer {aIcon} Fertilizer requirement depends
              on the soil fertility
            </p>
            <p>
              {iCon} First dose 6 - 8 days after transplanting {aIcon}50:100:100
              NPK kg / acre
            </p>
            <p>
              {iCon} Second dose 20 - 25 days after first application {aIcon}25:
              50 : 50 NPK kg / acre
            </p>
            <p>
              {iCon}Third dose 20 - 25 days after second application{aIcon}25:
              00:00 NPK kg / acre
            </p>
            <p>
              {iCon}At the time of Flowering {aIcon}Sulphur (Bensulf) 10 kg /
              acre
            </p>
            <p>
              {iCon}At the time of Fruit Setting {aIcon}Boracol ( BSF-12) 50 kg
              / acre Spray Calcium nitrate (1%solution) at the time of flowering
              (To increase fruit set). Spray Urea & Soluble K (1% solution each)
              at 15 days interval during harvesting time (To increase no. of
              pickings.)
            </p>
            <p>
              {iCon}Plant Protection{aIcon}Follow plant protection measures as
              and when required. The varietal characters & information given
              here for all crops & varieties are based on observation recorded
              at our trial stations. Change in place, season, cultural practice
              may result in variation.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className={classes.varieties}>
        <Row>
          <h3>Varieties</h3>
          <Col>
            <img src="/images/samar.jpg" height={350} width={"100%"} />
            <h4>Samar</h4>
          </Col>
          <Col>
            <img src="/images/advik.jpg" height={350} width={"100%"} />
            <h4>Advik</h4>
          </Col>
          <Col>
            <img src="/images/adhira.jpg" height={350} width={"100%"} />
            <h4>Adhira</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/images/aadya.jpg" height={350} width={"100%"} />
            <h4>Aadya</h4>
          </Col>
          <Col>
            <img src="/images/saira.jpg" height={350} width={"100%"} />
            <h4>Saira</h4>
          </Col>
          <Col>
            <img src="/images/apoorva.jpg" height={350} width={"100%"} />
            <h4>Apoorva</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/images/ritu.jpg" height={350} width={"100%"} />
            <h4>Ritu</h4>
          </Col>
          <Col>
            <img src="/images/unnati.jpg" height={350} width={"100%"} />
            <h4>Unnati</h4>
          </Col>
          <Col>
            <img src="/images/samanvi.jpg" height={350} width={"100%"} />
            <h4>Samanvi</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/images/avantika.jpg" height={350} width={"100%"} />
            <h4>Avantika</h4>
          </Col>
          <Col>
            <img src="/images/sringar.jpeg" height={350} width={"100%"} />
            <h4>Sringar</h4>
          </Col>
          <Col>
            <img src="/images/deepti.jpg" height={350} width={"100%"} />
            <h4>Deepti</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/images/fg 25.jpeg" height={350} width={"100%"} />
            <h4>FG 25</h4>
          </Col>
          <Col>
            <img src="/images/fg 44.jpg" height={350} width={"100%"} />
            <h4>FG 44</h4>
          </Col>
          <Col>
            </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Tomato;
