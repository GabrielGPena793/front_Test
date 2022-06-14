import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { api } from "../../Service/axios.js";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import stars from "../../img/stars.svg";

function CardRecommend() {

  const [productRecommend, setProductRecommend] = useState([]);

  useEffect(() => {
    api.get('/v1/products?').then((renponse) => {
      setProductRecommend(renponse.data.content);
    })
  }, []);

  return (
    <div className="cardRecommend-container">
      <Container >
        <h2 className="cardRecommend-h2"><span>Recomendações</span></h2>
        <div className="d-flex sm-flex-col md-flex-col lg-flex-row">
          <Row>
            {productRecommend.slice(0, 4).map(productRecommend => (
              <div key={productRecommend.id} className="col-sm-12 col-md-12 col-lg-12 col-xl-6 mb-4">
                <Card className="cardRecommend m-0 p-0">
                  <Row>
                    <div className="col-md-6 m-0 p-0">
                      <Card.Img
                        className="cardRecommend-img img-fluid p-0 m-0"
                        src={productRecommend.images[0].url}
                        alt={productRecommend.description}
                      />
                    </div>
                    <div className="col-md-6 m-0 p-0">
                      <Card.Body className="cardRecommend-body">

                        <div className="cardRecommend-top">
                          <Card.Subtitle className="cardRecommend-subtitle">{productRecommend.category.qualification}
                            <img src="#" alt="Ilustração de cinco estrelas na cor amarela" />
                          </Card.Subtitle>
                          <p className="evaluation-number">{productRecommend.evaluation}</p>
                        </div>
                        <div className="cardRecommend-top">
                          <Card.Title><h3 className="cardRecommend-title">{productRecommend.name}</h3>
                          </Card.Title>
                          <p className="evaluation-text">{productRecommend.evaluationText}</p>
                        </div>


                        <div className="cardRecommend-icons" >
                          <i className={productRecommend.characteristics[0].icon} aria-hidden="true"></i>
                          <Card.Subtitle className="cardRecommend-icon-Text">{productRecommend.characteristics[0].name}: {productRecommend.characteristics[0].description}</Card.Subtitle>
                        </div>
                        <div className="cardRecommend-icons" >
                          <i className={productRecommend.characteristics[1].icon} aria-hidden="true"></i>
                          <Card.Subtitle className="cardRecommend-icon-Text">{productRecommend.characteristics[1].name}: {productRecommend.characteristics[1].description}</Card.Subtitle>
                        </div>
                        <div className="cardRecommend-icons" >
                          <i className={productRecommend.characteristics[2].icon} aria-hidden="true"></i>
                          <Card.Subtitle className="cardRecommend-icon-Text">{productRecommend.characteristics[2].name}: {productRecommend.characteristics[2].description}</Card.Subtitle>
                        </div>
                        <div className="cardRecommend-icons" >
                          <i className={productRecommend.characteristics[3].icon} aria-hidden="true"></i>
                          <Card.Subtitle className="cardRecommend-icon-Text">{productRecommend.characteristics[3].name}: {productRecommend.characteristics[3].description} </Card.Subtitle>
                        </div>

                        <Card.Text><p className="cardRecommend-description">{productRecommend.description}</p></Card.Text>
                        <Link to={`/description/${productRecommend.id}`}>
                          <button className="cardRecommend-btn">Mais detalhes</button>
                        </Link>
                      </Card.Body>
                    </div>
                  </Row>
                </Card>
              </div>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default CardRecommend;
