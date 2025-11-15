import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <span style={styles.dot}></span>
        <h3 style={{ margin: 0 }}>Dalya Baron</h3>
        <p style={{ margin: 0, fontSize: "13px" }}>Astrophysics Research Student</p>
      </div>

      <nav style={styles.nav}>
        <a href="#">Resume</a>
        <a href="#">Research</a>
        <a href="#">Outreach</a>
        <a href="#">Personal</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    background: "#00bcd4",
    borderRadius: "50%",
  },
  nav: {
    display: "flex",
    gap: "15px",
    fontSize: "14px",
  },
};

export default Header;
