import { useLocation, Link } from "react-router-dom";
import "./UserDetails.css";
const UserDetails = () => {
  const location = useLocation();

  const { entries } = location.state;
  const keyValuePairs = Object.entries(entries);
  console.log(entries);

  //   const keys = Object.keys(entries);
  //   const values = Object.values(entries);

  return (
    <div>
      <section className="userSection">
        <table id="users">
          <thead>
            <tr>
              <th colSpan={2}>Users Details</th>
            </tr>
          </thead>
          <tbody>
            {location.state &&
              keyValuePairs.map(([key, value], index) => (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}

            {!location.state && (
              <tr>
                <td colSpan={2}>No data found</td>
              </tr>
            )}
          </tbody>
        </table>
        <Link to="/">
          <button className="footerbtn">Return </button>
        </Link>
      </section>
    </div>
  );
};

export default UserDetails;
