/* import { useAuthSelectors } from "../services/Auth/AuthSelectors" */
import Private from "./Private/Private";
import Public from "./Public/Public";
/* import { useEffect, useState } from "react" */

const App = () => {
  /* const { isAuthenticated } = useAuthSelectors() */
  const isAuthenticated = localStorage.getItem("accessToken") ? true : false;

  return isAuthenticated ? <Private /> : <Public />;
};

export default App;
