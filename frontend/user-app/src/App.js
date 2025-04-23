import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the User App</h1>
      <p>This is a simple user management application.</p>
      <h2>Message from Backend:</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{message}</p>
    </div>
  );
}

export default App;
