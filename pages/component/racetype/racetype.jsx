import { Col, Container, Row } from "react-bootstrap";
import style from "./racetype.module.css";
import title from "../../../assets/racetype/Racetype-title.png";
import card1 from "../../../assets/racetype/card/card1.png";
import card2 from "../../../assets/racetype/card/card2.png";
import card3 from "../../../assets/racetype/card/card3.png";
import { racetypeData } from "../../../data/racetype/racetypeData";

function Racetype() {
  return (
    <div className={style.bg_racetype}>
      <Container>
        <Row className="d-flex">
          <Col className="d-flex justify-content-md-center my-5">
            <div>
              <img
                src={title.src}
                className={style.racetype_title}
                alt="Race type"
              />
            </div>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col className="d-flex justify-content-md-center flex-md-row flex-column">
            <div className="position-relative">
              <img
                src={card1.src}
                alt="CHALLENGE RACE"
                className={`${style.racetype_card} ${style.racetype_cardoffset} py-2 px-xl-5 px-md-0`}
              />
              {racetypeData.map((items, index) => (
                <div key={index}>
                  <h2 className={`${style.title_cardoffset} position-absolute`}>
                    {items.title1}
                  </h2>
                  <ul className={`${style.contentoffset} position-absolute`}>
                    <li>Spend SNT to buy ticket to join this race</li>
                    <li>Winnner will receive an amount of SNT</li>
                    <li>The rest will receive 1 Medal as participation gift</li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="position-relative">
              <img
                src={card2.src}
                alt="RELAX RACE"
                className={`${style.racetype_card}  py-2 px-xl-5 px-md-0`}
              />
              {racetypeData.map((items, index) => (
                <div key={index}>
                  <h2 className={`${style.title_card} position-absolute`}>
                    {items.title2}
                  </h2>
                  <ul className={`${style.content} position-absolute`}>
                    <li>Choose a Snail to join race</li>
                    <li>Winner will receive an amount of SNT</li>
                    <li>The prize will be determined by the sponsor</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="position-relative">
              <img
                src={card3.src}
                alt="SPONSOR RACE"
                className={`${style.racetype_card} ${style.racetype_cardoffset} py-2 px-xl-5 px-md-2`}
              />
              {racetypeData.map((items, index) => (
                <div key={index}>
                  <h2 className={`${style.title_cardoffset} position-absolute`}>
                    {items.title3}
                  </h2>
                  <ul className={`${style.contentoffset} position-absolute`}>
                    <li>Choose a Snail to join race</li>
                    <li>Winner will receive an amount of SNT</li>
                    <li>The prize will be determined by the sponsor</li>
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Racetype;
