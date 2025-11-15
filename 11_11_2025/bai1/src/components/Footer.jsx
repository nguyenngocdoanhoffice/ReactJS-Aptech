import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div>Email<br />dalyabaron [at] gmail.com</div>
      <div>GitHub<br /><a href="#">https://github.com/someuser</a></div>
      <div>ADAMS fellow<br /><a href="#">https://adams.academy.ac.il/</a></div>

      <div style={{ opacity: 0.6, marginTop: "20px", width: "100%", textAlign: "center" }}>
        © 2023 by Dalya Baron  
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "40px",
    borderTop: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default Footer;
