import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Signup({ setCurrentUser, currentUser }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [picture, setPicture] = useState("");
  const [gender, setGender] = useState("male");
  const [birthdate, setBirthDate] = useState();
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !password ||
      !passwordConfirmation ||
      password !== passwordConfirmation
    ) {
      alert(
        "Please enter a password and make sure it is the same as your password confirmation"
      );
    } else {
      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          password_confirmation: passwordConfirmation,
          gender: gender,
          picture: picture,
          description,
          birthdate: birthdate,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user);
            history.push("/homepage");
          });
        } else {
          res.json().then((errors) => {
            console.log(errors);
            setErrors(errors);
          });
        }
      });
    }
  }

  return (
    <div
      className="authForm"
      style={{
        color: 'white',
        backgroundImage: `url(${"https://www.incimages.com/uploaded_files/image/1920x1080/getty_499578755_377423.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontWeight: "bold",
        textShadow:
          "0 0 20px black, 0 0 20px black, 0 0 20px black, 0 0 20px black",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Profile Creation Page</h1>
        <p>
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <br></br>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="picture">Profile Picture:</label>
          <br></br>
          <input
            type="picture"
            name="picture"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </p>
        Please Choose a Gender Identity:
        <p></p>
        <select
          onChange={(e) => setGender(e.target.value)}
          required
          placeholder="Male"
          className="form-control"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>
        <p>
          <label htmlFor="birthdate">When were you born?</label>
          <br></br>
          <input
            type="date"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="description">
            What would you like for us to know about you?
          </label>
          <br></br>
          <textarea
            type="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <p>
          {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li style={{ color: "red" }}>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )}
        </p>
        <p>
          <Button
            type="submit"
            className="login"
            variant="contained"
            color="primary"
          >
            Enter Profile ✍️
          </Button>
        </p>
        <p>-- or --</p>
        <Button variant="contained" color="secondary" className="TestLink">
          <Link to="/login" class="Links" style={{ color: "white" }}>
            Log In 👋 
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default Signup;
