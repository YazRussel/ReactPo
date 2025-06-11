import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  // Simulate API login (replace with real API call later)
  const handleLogin = async () => {
    try {
      // Mock API request (in a real app, use fetch/axios)
      const mockApiResponse = {
        token: "mock_jwt_token_123", // Simulated JWT
        user: { name: "John Doe", email: email },
      };

      // Store the mock JWT in localStorage
      localStorage.setItem("jwt", mockApiResponse.token);
      
      // Update UI
      setIsLoggedIn(true);
      setUserData(mockApiResponse.user);
      setError("");
    } catch (err) {
      setError("Login failed. Try again.");
    }
  };

  // Logout function (clears JWT)
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <>
          <h1>Login</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Submit</button>
        </>
      ) : (
        <>
          <h1>Welcome, {userData.name}!</h1>
          <p>Email: {userData.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;