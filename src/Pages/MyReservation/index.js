import React, { useState, useEffect } from 'react'
import "../MyReservation/style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from "../Login/hooks/useAuth";
import { BsFillSuitHeartFill, BsFillHouseFill, BsEnvelopeFill } from "react-icons/bs";
import axios from "../Login/servicesLogin/api";
import { CaretLeft } from 'phosphor-react';



function gettingFirstLetters(user) {
  if (typeof user !== "undefined") {
    return user.split(' ').map(word => word[0]).join('');
  } else {
    return "";
  }
}


export default function MyReservation() {

  const [userBookings, setUserBookings] = useState([]);

  const { user } = useAuth();

  async function getBookingsByUserId() {
    let bookings = await axios.get(`v1/bookings/user/${localStorage.getItem('@user_id')}`)
    setUserBookings(bookings.data);
  }
  useEffect(() => {
    getBookingsByUserId();
  }, [])

  let convertDate = (date) => {
    let arrayDate = date.split("-");
    return `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
  };

  return (
    <>
      <div className="description_header_all">
        <Navbar className="Header_description_All">
          <Navbar.Brand >
            <h4 title="Categoria" alt="Categoria">
              Minhas Reservas
            </h4>
          </Navbar.Brand>
          <Link className="link-to" to="/" alt="Voltar" title="Voltar">
            <CaretLeft size={50} weight="bold" color="var(--dark-blue)" />
          </Link>
        </Navbar>
      </div>            
      <div class="container container-my-reservation">
        <div class="row gap-5 side-list">
          <div class="col-3 shadow p-3 mb-5 bg-body rounded mt-3 link-list">
            <div className="initials">
              <div className="circle-reservation">
                <span>{gettingFirstLetters(user.login)}</span>
              </div>
            </div>
            <div className="user-reservation mt-3">
              <p className="hello-reservation">Olá,</p>
              <p className="name-reservation">{user.login}</p>
            </div>
            <ul className="list-group list-group-flush list-link mt-4">
              <li className="list-group-item"><Link className="list-item" to="/"><BsFillSuitHeartFill /> Favoritos</Link></li>
              <li className="list-group-item"><Link className="list-item" to="/"><BsFillHouseFill /> Home</Link></li>
              <li className="list-group-item"><Link className="list-item" to="/"><BsEnvelopeFill /> Contato</Link></li>
            </ul>
          </div>
          <div class="col-8 shadow p-3 mb-5 bg-body rounded mt-3 reservation-list">
            {userBookings.map(booking => (
              <div key={booking.id} className="card-reservation">
                <div className="car-image-reservation">
                  <p className="product-title">{booking.product.name}</p>
                  <img className="img-reservation" src={booking.product.images[2].url} alt={booking.product.name}/>
                  <p className="car-category-reservation">{booking.product.category.qualification}</p>
                </div>
                <div className="date-hour-reservation">
                  <p className="reservation-city">{booking.product.city.name}, {booking.product.city.country}</p>
                  <p className="hour-start"><span>Horário de retirada:</span>{booking.startTime}</p>
                  <p className="date-start"><span>Data de retirada:</span>{convertDate(booking.startDate)}</p>
                  <p className="date-final"><span>Data de devolução:</span>{convertDate(booking.endDate)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
