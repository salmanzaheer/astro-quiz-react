import "./App.css";
import React from "react";
import Game from "./components/Game";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="lg" sx={{ padding: "10dp" }}>
          <Game />
        </Container>
      </header>
    </div>
  );
}

export default App;
