import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import { FaChevronCircleDown } from "react-icons/fa";
// Data
import { moreInfo, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
            {resume && (
            <div className="d-flex justify-content-center">
            <a href={resume} target="_blank">
              <Button size="lg" className="mt-2 mb-5">
                Resume
              </Button>
            </a>
          </div>
            
          )}
          </Row>
          <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"Projects"} className="link-icons">
              <FaChevronCircleDown />
            </Link>
          </Col>
        </Row>
        </Container>
      </StyledAboutMe>
    </Element>
    
    
  );
}

