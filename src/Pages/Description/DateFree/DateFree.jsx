import React, { useEffect, useState } from "react";
import "./DateFree.css";
import { Calendar } from "react-multi-date-picker";
import useAuth from "../../Login/hooks/useAuth";
import { Link } from "react-router-dom";
import { ButtonPadrao } from "../../../components/ButtonPadrao";
import { format } from "date-fns/esm";

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

export function DateFree({ numberOfMonths, productId }) {
  const { isLogin, setLogginRedirect } = useAuth();

  function handleChange(e) {
    //setando data no localStorage
    if (e[0] && e[1]) {
      localStorage.setItem(
        "@inicial_date",
        JSON.stringify({
          inputDate: format(new Date(e[0]), "dd/MM/yyyy"),
          calendarDate: format(new Date(e[0]), "yyyy-MM-dd"),
        })
      );

      localStorage.setItem(
        "@final_date",
        JSON.stringify({
          inputDate: format(new Date(e[1]), "dd/MM/yyyy"),
          calendarDate: format(new Date(e[1]), "yyyy-MM-dd"),
        })
      );
    }
  }

  function handleClick() {
    setLogginRedirect(true);
  }

  return (
    <div className="available-date">
      <h3>Datas disponíveis</h3>
      <div className="card-datepicker">
        <div className="date_free_calendar">
          <Calendar
            mode="range"
            numberOfMonths={numberOfMonths}
            range
            value={localStorage.getItem("@inicial_date") === "" ? [] 
            :
            [
              JSON.parse(localStorage.getItem("@inicial_date")).calendarDate,
              JSON.parse(localStorage.getItem("@final_date")).calendarDate,
            ]}
            onChange={(event) => handleChange(event)}
            weekDays={weekDays}
            months={months}
            className="container__calendar"
          />
        </div>
        <div className="card-add-date">
          <p>Adicione as datas que deseja reservar para obter preços exatos</p>
          {isLogin ? (
            <>
              <Link to={`/reservation/${productId}`}>
                <ButtonPadrao text="Iniciar Reserva" />
              </Link>
            </>
          ) : (
            <Link to="/login">
              <ButtonPadrao text="Iniciar Reserva" handleClick={handleClick} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
