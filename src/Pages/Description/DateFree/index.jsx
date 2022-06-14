import React from "react";
import "./styles.css";
import { Calendar } from "react-multi-date-picker";

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

export default function DateFree({ numberOfMonths }) {
  return (
    <div className="available-date">
      <h3>Datas disponíveis</h3>
      <div className="card-datepicker">
        <div className="date_free_calendar">
          <Calendar
            mode="range"
            numberOfMonths={numberOfMonths}
            range
            weekDays={weekDays}
            months={months}
          />
        </div>
        <div className="card-add-date">
          <p>Adicione as datas que deseja reservar para obter preços exatos</p>
          <button className="btn btn-primary btn-reserva">
            Iniciar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}
