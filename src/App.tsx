import { useState } from "react";
import MainRouter from "./app/routing";
import Header from "./components/Header/Header.tsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleAuthentication={handleAuthentication} />
      <MainRouter />
    </>
  );
};

export default App;
