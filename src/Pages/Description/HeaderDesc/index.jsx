import React, {useState, useEffect} from "react";
import { BsStarFill, BsChevronLeft, BsFillGeoAltFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./styles.css";
import StarScore from "../../../components/StarScore"

export default function HeaderDesc({ products }) {

  const [titleProductScore, setTitleProductScore] = useState("");

  function productScoreTitle(score) {
    if (score === null) setTitleProductScore("N/A");
    if (score === 1) setTitleProductScore("Ruim");
    if (score === 2) setTitleProductScore("Pode melhorar");
    if (score === 3) setTitleProductScore("Bom");
    if (score === 4) setTitleProductScore("Muito Bom");
    if (score === 5) setTitleProductScore("Excelente");
  }

  useEffect(() => {
    console.log(products)
  }, [])
  

  return (
    <>
    {products.map((product) => (
    <div className="description_all" key={product.id}>
      <div className="description_header_all">
        <Navbar className="Header_description_All">
          <Navbar.Brand className="text-white">
            <h5 title="Categoria" alt="Categoria">
            {product.name}
            </h5>
            <h4 title="Titulo Carro" alt="Titulo Carro">
            {product.category.qualification}
            </h4>
          </Navbar.Brand>
          <Link className="link-to" to="/home" alt="Voltar" title="Voltar">
            <div className="text-white">
              <BsChevronLeft className="icon_back_header_description" />
            </div>
          </Link>
        </Navbar>
      </div>

      <div className="description_localidade_avaliacao_color">
        <Navbar className="description_localidade_avaliacao">
          <Navbar.Brand>
            <h6 title="Titulo Carro" alt="Titulo Carro">
              <BsFillGeoAltFill className="header_iconLocation"/>
               {product.city.name}, {product.city.country}
            </h6>
          </Navbar.Brand>
          <div>
            <h5 title="Categoria" alt="Categoria">
              {titleProductScore}
            </h5>
            <StarScore score={product.score} />
          </div>
        </Navbar>
      </div>
    </div>
  ))}
  </>
  );
}
