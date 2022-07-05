import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";

function Country() {
  const [capitalCity, setCapital] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { capital } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/capital/${capital}`) // searching throught capitals to avoid similarly named countries appearing in results
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setCapital(result);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="country-section">
        <Link to="/" className="back-link">
          <span className="back-arrow">&larr;</span>
          back
        </Link>

        {capitalCity.map((c) => {
          const {
            name,
            flags,
            coatOfArms,
            capital,
            population,
            region,
            subregion,
            maps,
            area,
            timezones,
          } = c;
          return (
            <article key={name.common}>
              <div
                className="detailed-info"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}
              >
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "1.7rem",
                  }}
                >
                  {name.official}
                </p>
                <p>
                  Сapital:{" "}
                  <span
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {capital}
                  </span>
                </p>
                <p>
                  Population:{" "}
                  <span
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {population.toLocaleString()}
                  </span>
                </p>
                <p className="">
                  Region:{" "}
                  <span
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {region}
                  </span>
                </p>
                <p className="">
                  Sub Region:{" "}
                  <span
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {subregion}
                  </span>
                </p>
                <p>
                  Timezone(s):{" "}
                  <span
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {timezones.join(", ")}
                  </span>
                </p>
                <p>
                  Area:{" "}
                  <span
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    {area.toLocaleString()} km&#xB2;
                  </span>
                </p>
                <a href={maps.googleMaps} target="#">
                  Country Location
                </a>
              </div>

              <div className="country-visuals">
                <div className="flag-info">
                  <img
                    className="single-country-img"
                    src={flags.svg}
                    alt="country_flag"
                  />
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "1.2rem",
                    }}
                  >
                    Flag
                  </p>
                </div>
                <div
                  className="emblem-info"
                  style={{
                    fontWeight: "400",
                    fontSize: "1.2rem",
                  }}
                >
                  <img
                    className="single-country-coatofarms"
                    src={coatOfArms.svg}
                    alt="country_coatofarms"
                  />
                  <p className="emblem-text">National emblem</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Country;
