
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#5E9FD1" }}>
      
      <div className="container-fluid ps-lg-5 pe-lg-4 py-4">

        {/* Top Row */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="logoWord" style={{ fontSize: "20px", fontWeight: "500" }}>
            🛒 our store 
          </span>

          <span style={{ color: "#D1E2FF", fontSize: "14px" }}>
            © 2026 our store — All rights reserved
          </span>
        </div>

        <hr style={{ borderColor: "#D1E2FF" }} />

        {/* Links Section */}
        <div className="row mt-3 text-white">

          <div className="col-md-4">
            <h6>Quick Links</h6>
            <p style={{ margin: 0, fontSize: "14px", cursor: "pointer" }}>Home</p>
            <p style={{ margin: 0, fontSize: "14px", cursor: "pointer" }}>Products</p>
            <p style={{ margin: 0, fontSize: "14px", cursor: "pointer" }}>About</p>
          </div>

          <div className="col-md-4">
            <h6>Contact</h6>
            <p style={{ margin: 0, fontSize: "14px" }}>📧 support@our store.com</p>
            <p style={{ margin: 0, fontSize: "14px" }}>📞 +20 100 000 0000</p>
            <p style={{ margin: 0, fontSize: "14px" }}>📍 Cairo, Egypt</p>
          </div>

          <div className="col-md-4">
            <h6>Follow Us</h6>
            <div className="d-flex gap-3" style={{ fontSize: "20px" }}>
              <span style={{ cursor: "pointer" }}>🌐</span>
              <span style={{ cursor: "pointer" }}>📘</span>
              <span style={{ cursor: "pointer" }}>🐦</span>
              <span style={{ cursor: "pointer" }}>📸</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}