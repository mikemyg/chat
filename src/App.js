import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterContainer from "./router/RouterContainer";
import { AuthContext } from "./context/auth";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./styles/main.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn: setIsLoggedIn, user, setUser }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="app-container">
            <RouterContainer />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
