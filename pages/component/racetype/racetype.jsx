import { Col, Container, Row } from "react-bootstrap";
import style from './racetype.module.css'
import title from '../../../assets/racetype/Racetype-title.png'
import card1 from '../../../assets/racetype/card/card1.png';
import card2 from '../../../assets/racetype/card/card2.png';
import card3 from '../../../assets/racetype/card/card3.png';

function Racetype() {
    return (
        <div className={style.bg_racetype}>
            <Container>
                <Row className="d-flex">
                    <Col className="d-flex justify-content-md-center my-5">
                        <div>
                            <img src={title.src} className={style.racetype_title} alt="Race type" />
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex">
                    <Col className="d-flex justify-content-md-center flex-md-row flex-column">
                        <div>
                           <img src={card1.src} alt="" className={`${style.racetype_card} py-2 px-xl-5 px-md-2`}/>

                        </div>
                        <div>
                        <img src={card2.src} alt="" className={`${style.racetype_card} py-2 px-xl-5 px-md-2`}/>
                        </div>
                        <div>
                        <img src={card3.src} alt="" className={`${style.racetype_card} py-2 px-xl-5 px-md-2`}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Racetype;