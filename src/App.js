import React from "react";
import { useState } from "react";
import Login from "./0511hw";

const INIT_USER = {
  email: "",
  password: "",
};

const App = () => {
  const [user, setUser] = useState(INIT_USER);

  return <Login user={user} setUser={setUser} />;
};

export default App;
