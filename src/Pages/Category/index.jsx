import React, { useEffect, useState } from 'react'
import { Card, Navbar, FormSelect } from 'react-bootstrap';
import { BsChevronLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from '../../components/Loading';

import './style.css'

function Category() {

  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true)

  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);



  const params = useParams();
  let navigate = useNavigate();

  //Busca os nomes das categorias cadastradas no bd para utilizar na sidebar
  async function getCategory() {
    try {
      const data = await fetch("https://back-end-booking.herokuapp.com/v1/categories")
      const response = await data.json()
      setCategory(response)
      setLoading(false)
    } catch (error) {
      alert("Erro de comunicação com o servidor", error)
    }
  }

  //Filtra os produtos a partir da categoria
  async function filterByCategory(qualification) {
    try {
      const data = await fetch(`https://back-end-booking.herokuapp.com/v1/products/category?qualification=${qualification}&page=0&size=20`)
      const { content } = await data.json()
      setProducts(content)
      setLoading(false)
      moveScroll()
    } catch (error) {
      alert("Erro de comunicação com o servidor", error)
    }
  }

  //Busca as cidades cadastradas no bd para utilizar no botão de filtro
  async function getCity() {
    try {
      const data = await fetch("https://back-end-booking.herokuapp.com/v1/cities")
      const response = await data.json()
      setCity(response)
      setLoading(false)
    } catch (error) {
      alert("Erro de comunicação com o servidor", error)
    }
  }

  //Filtra todos os modelos a partir da cidade
  async function filterProductsByCity(name) {
    try {
      if (name === "") filterAllProducts();
      const data = await fetch(`https://back-end-booking.herokuapp.com/v1/products/city?name=${name}&page=0&size=20`)
      const response = await data.json()
      setProducts(response.content)
      moveScroll()
    } catch (error) {
      alert("Erro de comunicação com o servidor", error)
    }
  }

  //Busca todos os produtos
  async function filterAllProducts() {
    try {
      const data = await fetch(`https://back-end-booking.herokuapp.com/v1/products?page=0&size=32`)
      const response = await data.json()
      console.log(response)
      setProducts(response.content)
      moveScroll()
    } catch (error) {
      alert("Erro de comunicação com o servidor", error)
    }
  }

  // Para que ao sair e voltar para a página, o body estaja no topo 
  function moveScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    getCity()
    getCategory()
    filterByCategory(params.category)
  }, [params.category])

  if (loading === true) {
    return <Loading />
  }

  return (
    <>
      <div className="description_header_all">
        <Navbar className="Header_description_All">
          <Navbar.Brand className="text-white">
            <h4 title="Categoria" alt="Categoria">
              Categoria
            </h4>
          </Navbar.Brand>
          <Link className="link-to" to="/" alt="Voltar" title="Voltar">
            <div className="text-white">
              <BsChevronLeft className="icon_back_header_description" />
            </div>
          </Link>
        </Navbar>
      </div>

      <div className="container category-container">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <div className="sidebar-category">
              <ul className="list-unstyled components">
                {category.map(category => (
                  <li className="sidebar-li-btn" key={category.id} onClick={() => filterByCategory(category.qualification)}>{category.qualification}</li>
                ))}
                <li className="sidebar-li-btn" onClick={filterAllProducts}> Todos</li>
                <FormSelect className="sidebar-select" onChange={(e) => filterProductsByCity(e.target.value)}>
                  <option selected disabled>Filtre por cidade</option>
                  {city.map(city => (
                    <option
                      className="sidebar-option"
                      value={city.name}>{city.name}</option>
                  ))}
                </FormSelect>
              </ul>
            </div>

          </div>

          <div className='col-md-9'>
            <div className="row">
              {products.map(product => (
                <>
                  <div key={product.id} className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 mb-4">
                    <Link className="cardCategory-link" to={`/description/${product.id}`}>
                      <Card className="singleCard">
                        <div className="singleCard-img-content">
                          <Card.Img
                            className="singleCard-img img-fluid"
                            src={product.images[0].url}
                            alt={product.description}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="singleCard-title">{product.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>

    </>
  )
}

export default Category;