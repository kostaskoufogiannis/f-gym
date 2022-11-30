import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import AppRouter from "./pages/AppRouter";

const App = () => {
  return (
    <AppRouter>
      <div>
        <Header />
        <Main />
      </div>
    </AppRouter>
  );
};

export default App;
