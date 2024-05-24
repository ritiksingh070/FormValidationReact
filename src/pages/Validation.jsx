import "./Validation.css";
import { useState } from "react";
import { inputs, countries, cities, countryCodes } from "../data/Data";
import { useNavigate } from "react-router-dom";

const Validation = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phNumber, setPhNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [blured, setBlured] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phNumberRegex = /^\d{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = new FormData(e.target);
    // console.log(data);

    const entries = Object.fromEntries(data.entries());
    // console.log(entries);
    // const keys = Object.keys(entries);
    // console.log(keys);
    navigate("/userdetails", { state: { entries } });

    setIsSubmitted(false);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleBlur = () => {
    setBlured(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhNumberChange = (e) => {
    setPhNumber(e.target.value);
  };

  return (
    <div className="validationContainer">
      <section className="validSection">
        <h2>Form Validation</h2>

        {isSubmitted ? (
          <>{phNumber}</>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              {inputs.map((input, index) => (
                <div key={index}>
                  <label>
                    <b>{input.label}</b>
                  </label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    required={input.required}
                    pattern={input.pattern}
                    onBlur={handleBlur}
                  />
                  {blured && <span>{input.errorMessage}</span>}
                </div>
              ))}
              <label>
                <b>Phone No.:</b>
              </label>
              <div className="phNumberContainer">
                <div className="countryCode">
                  <select
                    name="countryCode"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    required
                  >
                    <option value="">Select Country Code</option>
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.country} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="phNumber">
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={phNumber}
                    onChange={handlePhNumberChange}
                    required
                  />
                </div>
              </div>
              {blured && !phNumberRegex.test(phNumber) && (
                <p>Phone number invalid</p>
              )}

              <div>
                <div>
                  <label>
                    <b>Password:</b>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="showHide">
                  <div>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={togglePasswordVisibility}
                    />
                    <label>
                      {showPassword ? "Hide Password" : "Show Password"}
                    </label>
                  </div>
                </div>
                {blured && !passwordRegex.test(password) && (
                  <p>
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one numeric digit, one special character,
                    and be at least 8 characters long.
                  </p>
                )}
              </div>

              <label>
                <b>Country:</b>
              </label>
              <select name="country" required>
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <label>
                <b>City:</b>
              </label>
              <select name="city" required>
                <option value="">Select city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <button type="submit" name="submit">
                Submit
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default Validation;
