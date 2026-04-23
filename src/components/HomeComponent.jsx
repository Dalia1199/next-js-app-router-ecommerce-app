
import Link from "next/link";

export default function HomeComponent() {
  return (
    <div className="container py-4">

      <div
        className="text-center py-5"
        style={{
          background: "#f0f9ff",
          borderRadius: "20px",
          border: "1px solid #e0f2fe",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "500",
            color: "#0f172a",
            marginBottom: "10px",
          }}
        >
          Welcome to <span style={{ color: "#2563eb" }}>our store</span> 🛒
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#64748b",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          A smart and simple way to explore, manage, and organize products in one
          modern platform built for speed and clarity.
        </p>

        <Link href="/products">
          <button
            className="btn mt-4 px-4"
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              borderRadius: "50px",
              border: "none",
              padding: "10px 24px",
            }}
          >
            Start Exploring 🚀
          </button>
        </Link>
      </div>

      {/* Highlights Section (Different Style) */}
      <div className="mt-5">

        <h4 style={{ color: "#0f172a", marginBottom: "20px" }}>
          Why ProductHub?
        </h4>

        <div className="row g-4">

          <div className="col-md-6">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h6 style={{ color: "#2563eb" }}>🔎 Smart Search</h6>
              <p style={{ color: "#64748b", fontSize: "0.9rem", margin: 0 }}>
                Quickly find any product using optimized search and filtering system.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h6 style={{ color: "#2563eb" }}>⚙️ Simple Control</h6>
              <p style={{ color: "#64748b", fontSize: "0.9rem", margin: 0 }}>
                Manage your products easily without complexity or confusion.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h6 style={{ color: "#2563eb" }}>⚡ Fast Experience</h6>
              <p style={{ color: "#64748b", fontSize: "0.9rem", margin: 0 }}>
                Built for speed with smooth navigation and instant responses.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <h6 style={{ color: "#2563eb" }}>📊 Organized Data</h6>
              <p style={{ color: "#64748b", fontSize: "0.9rem", margin: 0 }}>
                Keep everything structured and easy to manage in one place.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}