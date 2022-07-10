import React from "react";
import {  NavDropdown } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";

export function AvatarProfile({ user, handleLogout }) {

  function setIsLoginFalse() {
    localStorage.removeItem("@token_user");

    handleLogout(false);
  }

  return (
    <NavDropdown
      id="nav-dropdown-dark-example"
      title="Conta"
      menuVariant="dark"
    >
      <div className="container_avatar_name">
        {user.login}
      </div>
      {user.role.includes("USERS") && user.role.length === 1 ? (
        <>
          <Link className="dropdown-item" to="/myReservation">
            Minhas Reservas
          </Link>
          <span className="avatar_logout dropdown-item" onClick={setIsLoginFalse}>
            Sair
          </span>
        </>
      ) : (
        <>
          <Link className="dropdown-item" to="/myReservation">
            Minhas Reservas
          </Link>
          <Link className="dropdown-item" to="/admin">
            Administração de produtos
          </Link>
          <span className="avatar_logout dropdown-item" onClick={setIsLoginFalse}>
            Sair
          </span>
        </>
      )}
    </NavDropdown>
  );
}
