import { Container, Row, Col } from "reactstrap";
import classes from "./About.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { IconContext } from "react-icons";

const Readmore = () => {
  return (
    <div>
      <Container>
        <div className={classes.container1}>
          <Row className={classes.row}>
            <Col>
              <h3>Who we really are</h3>
              <p>
                <IconContext.Provider value={{ color: "green" }}>
                  <BiCheckCircle />
                </IconContext.Provider>
                About
              </p>
              <br />
              <p>
                FARMAGEN CROP SCIENCE is instituted by dynamic team of
                entrepreneurs with a dream to transform Indian farming by
                providing one stop solutions to farmers. FARMAGEN CROP SCIENCE
                is an innovative breeding company specialized in creating
                vegetable hybrid seeds. Our breeding program is characterized by
                a strong focus on nutrient value and high yield. Attaining
                maximum quality standards is what drives the company to develop
                ingenious vegetable hybrids. Only high-quality seeds can ensure
                crop productivity and help farmers in reaping more benefits
                using less resources.
              </p>
            </Col>
            <Col>
              <div>
                <img src="/images/photo4.jpg" alt="doctor"></img>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <Container>
          <Row>
            <Col>
              <p>
                The company is managed by team of high professionals who
                collaborate in developing and breeding new varieties, which are
                the key to future. At Farmagen, we believe “one cannot solve the
                fourth-generation problems by the third-generation solutions
                coming from the second-generation systems with the
                first-generation management styles”. Solution can only be
                achieved through Research, Innovation, and Quality standards.
              </p>
            </Col>
            <Col> </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              <p>
                <IconContext.Provider value={{ color: "green" }}>
                  <BiCheckCircle />{" "}
                </IconContext.Provider>
                Research and development <br />
                The success of Farmagen research effort is reflected in ongoing
                release of new productive hybrids. Farmagen crop science
                commitment towards sustainable development of agriculture to
                meet farmers need and food demand. R&D team is developing
                vegetable seeds which are nationally acclaimed in a way that
                including breeders, technicians work together by using cutting
                edge technology to conventional breeding method. R&D team focus
                on research strategies which are necessary for disease resistant
                seeds and functional seeds. We have a vision to maximize the
                production with the utilization of available resources and bring
                happiness among farming community.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Readmore;
