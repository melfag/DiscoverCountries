import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

function Countries() {
  const [countries, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCoins = countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(search.toLowerCase())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <form action="">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search for a country"
        />
      </form>

      <section className="country-grid">
        {searchCoins.map((country) => {
          const { ccn3, flags, name, capital, population } = country;

          return (
            <span key={name.official}>
              <div className="grid-items" key={ccn3}>
                <img className="flag" src={flags.svg} alt="" />
                <div className="country-info">
                  <p className="country-name">{name.common}</p>
                  <p className="capital">
                    Capital: <span className="capital-style">{capital}</span>
                  </p>
                  <p className="population">
                    Population:{" "}
                    <span className="population-style">
                      {population.toLocaleString()}
                    </span>
                  </p>
                </div>
                <Link to={`/countries/${capital}`}>Learn more</Link>
              </div>
            </span>
          );
        })}
      </section>
    </>
  );
}

export default Countries;
