const styles = {
  overlay: {
    position: "fixed",
    left: 0,
    top: "80px",
    height: `calc(100vh - 80px)`,
    width: "100vw",
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  spinner: {
    width: 80,
    height: 80,
    border: "12px solid #fff",
    borderTop: "12px solid #ff6b6b",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Arial, sans-serif",
  },
};

function Loading({ loading, message = "Loading Bucket..." }) {
  if (loading)
    return (
      <div style={styles.overlay}>
        <div style={styles.spinner}></div>
        <p style={styles.text}>{message}</p>
      </div>
    );

  return null;
}

export default Loading;
