import React from "react";
import { Signin } from "../../login/SignIn";
import { Link } from "react-router-dom";
import infobae from "../../images/infobae.jpg";

export const Navbar = () => {
  const storedUser = localStorage.getItem("user");
  return (
    <div className="fixed top-0 w-full bg-black p-2 flex items-center justify-between">
      <img
        src={infobae}
        className="w-10 rounded-full  ml-3 "
        alt="infobae's logo"
      />
      <Link to="/">
        <span className="text-lg font-normal" style={{ color: "#F68E1E" }}>
          Inicio
        </span>
      </Link>
      {storedUser ? (
        <Link
          to="/users"
          className="text-lg font-normal"
          style={{ color: "#F68E1E" }}
        >
          <span>Usuarios</span>
        </Link>
      ) : null}
      <a
        href="https://www.infobae.com/colombia/"
        className="text-lg font-normal"
        style={{ color: "#F68E1E" }}
        target="blank"
      >
        <span>Página Infobae</span>
      </a>

      <Signin />
    </div>
  );
};
