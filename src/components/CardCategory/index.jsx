import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { api } from "../../Service/axios.js";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../../components/Loading"

function CardCategory() {

  const [productCategory, setProductCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/v1/categories').then((response) => {
      setProductCategory(response.data);
      setLoading(false)
    });
  }, []);

  if (loading === true) {
    return <Loading />
  }

  return (
    <div className="cardCategory-container">
      <Container >
        <h2 className="cardCategory-h2"><span>Buscar por categoria</span></h2>
        <div className='d-flex'>
          <Row>
            {productCategory.map(productCategory => (
              <div key={productCategory.id} className="col-sm-6 col-md-6 col-lg-6 col-xl-3 mb-4">
                <Link className="cardCategory-link" to={`/category/${productCategory.qualification}`}>
                  <Card className="cardCategory-card">
                    <div className="cardCategory-img-content">
                      <Card.Img
                        className="cardCategory-img img-fluid"
                        src={productCategory.imageUrl}
                        alt={productCategory.description}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="cardCategory-title">{productCategory.qualification}</Card.Title>
                      <Card.Text className="cardCategory-text">{productCategory.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </Row>
        </div>
      </Container>

    </div>
  )
}

export default CardCategory;

