import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import LoginTree from "./LoginTree";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          if (user) {
            setCurrentUser(user);
            setAuthChecked(true);
          } else {
            setCurrentUser(user);
            setAuthChecked(true);
          }
        });
      } else {
        setAuthChecked(true);
      }
    });
  }, []);

  if (authChecked) {
    return <div>"test"</div>;
  }

  return (
    <div className="App">
      <Router>
        {currentUser ? (
          <HomePage setCurrentUser={setCurrentUser} currentUser={currentUser} />
        ) : (
          <LoginTree
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
