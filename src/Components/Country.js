import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";

const Country = (props) => {
  let { country } = props;

  const population = new Intl.NumberFormat("en-US").format(country.population);

  return (
    <Link
      to={`countries/${props.to ? props.to : country.cca2}`}
      className="card shadow-sm bg-fff"
    >
      <img
        src={country.flags?.png}
        className="card-img-top"
        alt={country.cca2}
        style={{ height: "150px" }}
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{country.name?.official}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="fw-bold">Population: </span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Region: </span>
          <span>{country.region}</span>
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Capital: </span>
          <span>{country.capital}</span>
        </li>
      </ul>
    </Link>
  );
};

export default Country;
