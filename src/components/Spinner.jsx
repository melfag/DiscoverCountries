import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <div className="spinner">
      <img width={180} src={spinner} alt="Loading..." />
      <p>Fetching the data...</p>
    </div>
  );
}

export default Spinner;
