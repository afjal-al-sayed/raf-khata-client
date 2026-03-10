import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showError } from "../utils/uiErrorHandler";

const styles = {
  container: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #f6f9fc, #e9eef5)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    background: "white",
    padding: "40px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "420px",
  },
  image: {
    width: "180px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  message: {
    color: "#666",
    marginBottom: "25px",
    fontSize: "15px",
  },
  button: {
    padding: "10px 22px",
    fontSize: "15px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },
};

function ErrorComponent({ error, onError = null }) {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (error) {
  //     showError(error);
  //     if (!onError) onError();
  //   }
  // }, [error]);

  if (error)
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <img
            src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?t=st=1773063887~exp=1773067487~hmac=5778ccbd1dd679a873fb474e46ead6754b08f36cddcc11055216fff22346ee46&w=1480"
            alt="Network Error"
            style={styles.image}
          />

          <h1 style={styles.title}>Error Code: {error.status}</h1>

          <p style={styles.message}>{error.message}</p>

          <button style={styles.button} onClick={() => navigate("/")}>
            Go to Home
          </button>
        </div>
      </div>
    );

  return null;
}

export default ErrorComponent;
