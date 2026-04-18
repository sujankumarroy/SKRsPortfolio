import React from "react";

const Footer = () => {
  const footerStyle = {
    textAlign: "center",
    padding: "30px 15px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    background: "#0d0d0d",
    fontSize: "0.9rem",
    opacity: 0.85,
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 Sujan Kumar Roy</p>
    </footer>
  );
};

export default Footer;
