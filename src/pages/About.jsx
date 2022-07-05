import { FaHeart } from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <h2>Discover Countries</h2>
      <p>
        An app for learning about countries, to use the app, click the{" "}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          home
        </span>{" "}
        button above
      </p>
      <p>
        The data for this app was taken from {""}
        <a href="https://restcountries.com/" target="#">
          {" "}
          Rest Countries API
        </a>
      </p>
      <p className="github">
        Made with <FaHeart style={{ color: "red" }} /> by
        <a
          href="https://github.com/melfag"
          target="#"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {""} melfag
        </a>
      </p>
    </section>
  );
}

export default About;
