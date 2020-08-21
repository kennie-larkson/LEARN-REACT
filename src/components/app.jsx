import React, { useState } from "react";

import Navbar from "./navbar";

function App() {

  const date = new Date().toLocaleTimeString();

  return <Navbar />;
}

export default App;
