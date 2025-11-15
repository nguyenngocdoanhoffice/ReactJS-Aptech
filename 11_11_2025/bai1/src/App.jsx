import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    background: "#f2f2f2",   
  },
};

export default App;
