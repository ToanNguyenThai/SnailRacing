import { Col, Container, Row } from "react-bootstrap";
import style from './nftitems.module.css'
import title from '../../../assets/nft-items/nftitem-title.png';


function Nftitems() {
  return (
  <Container>
          <Row className="d-flex">
          <Col className="d-flex justify-content-md-center my-5">
          <div>
              <img src={title.src} className={style.racetype_title} alt="Race type"/>
          </div>
          </Col>
          </Row>

          <Row className="d-flex">
          <Col className="d-flex justify-content-md-center flex-md-row flex-column">
          <div>
              {/* <img src={card1.src} alt="" className={`${style.racetype_card} px-md-3 px-xl-5 py-3`}></img> */}
              </div>
              <div>
              {/* <img src={card1.src} alt="" className={`${style.racetype_card} px-md-3 px-xl-5 py-3`}></img> */}
              </div>
              <div>
              {/* <img src={card1.src} alt="" className={`${style.racetype_card} px-md-3 px-xl-5 py-3`}></img> */}
              </div>
          </Col>
          </Row>
  </Container>
  );
}

export default Nftitems;
