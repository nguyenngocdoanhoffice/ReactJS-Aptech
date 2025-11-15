import React from "react";

function Main() {
  return (
    <main style={styles.main}>
      <div style={styles.wrapper}>
        <img
          src="https://i.ibb.co/3z0W0Vy/profile-demo.jpg"
          alt="profile"
          style={styles.avatar}
        />

        <div style={styles.info}>
          <h1>Dalya Baron</h1>
          <h3 style={{ marginTop: "-10px", color: "#444" }}>A Bit About Me</h3>

          <p style={{ lineHeight: "1.6" }}>
            I am a graduate student at the Tel Aviv University Astrophysics
            Department. I am mostly working on active galactic nuclei and how the
            galaxy evolution, as well as machine learning algorithms and their
            application to astronomical datasets.
          </p>

          <div style={styles.circleWrap}>
            <div style={{ ...styles.circle, background: "#c6e377" }}>Resume</div>
            <div style={{ ...styles.circle, background: "#ffcc00" }}>Research</div>
            <div style={{ ...styles.circle, background: "#8ddbf0" }}>Outreach</div>
            <div style={{ ...styles.circle, background: "#d3d3d3" }}>Personal</div>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    width: "100%",
    padding: "60px 0",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    gap: "60px",
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
    padding: "0 40px",
  },
  avatar: {
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  info: {
    flex: 1,
  },
  circleWrap: {
    marginTop: "25px",
    display: "flex",
    gap: "20px",
  },
  circle: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Main;
