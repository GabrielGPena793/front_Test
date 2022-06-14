import { Card } from "react-bootstrap";
import { Calendar } from "react-multi-date-picker";
import "./styles.css";
import { useState, useEffect } from "react";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Quin", "Sex", "Sab"];
const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export default function ReservPage({ products }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numberOfMonths, setNumberOfMonths] = useState(2);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    if (windowWidth < 580) {
      setNumberOfMonths(1);
    } else {
      setNumberOfMonths(2);
    }
  }, [windowWidth]);

  return (
    <div className="reserv_page">
      {products.map((product) => (
        <div className="reserv_page_color_pad">
          <h4>Complete seus dados</h4>
          <div className="reserv_page_all">
            <div className="reserv_page_left">
              <div className="reserv_page_data"></div>
              <h4>Selecione sua data de reserva</h4>
              <div className="reserv_page_schedule">
                <Calendar
                  mode="range"
                  numberOfMonths={numberOfMonths}
                  range
                  weekDays={weekDays}
                  months={months}
                  // style={}
                />
              </div>
              <h4>Seu Horario de chegada</h4>
              <div className="reserv_page_time"></div>
            </div>
            <div className="reserv_page_right">
              <h4>Detalhe da reserva</h4>
              <Card.Img
                className="reserv_page_img"
                src={product.images[1].url}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
