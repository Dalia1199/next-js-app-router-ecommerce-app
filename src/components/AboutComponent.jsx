
import Link from "next/link";

export default function AboutComponent() {
  return (
    <div className="container py-4">

      <div
        className="text-center py-5"
        style={{
          background: "#f8fafc",
          borderRadius: "18px",
          marginTop: "1.5rem",
          border: "1px solid #e5e7eb",
        }}
      >
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: "500",
            color: "#0f172a",
            marginBottom: "0.8rem",
          }}
        >
          About <span style={{ color: "#2563eb" }}>our store</span> 🛒
        </h1>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "#64748b",
            fontSize: "0.95rem",
            lineHeight: "1.6",
          }}
        >
          our store is a simple and modern platform where you can explore
          products, view details, and manage everything in one place with ease.
        </p>

        <Link href="/products">
          <button
            className="btn mt-4 px-4"
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              borderRadius: "50px",
              border: "none",
              padding: "10px 22px",
              fontSize: "0.9rem",
            }}
          >
            show all our products 
          </button>
        </Link>
      </div>

      <div className="row mt-4 g-3">

        <div className="col-md-4">
          <div
            className="card h-100 text-center border-0 shadow-sm p-3"
            style={{ borderRadius: "16px", background: "#ffffff" }}
          >
            <div style={{ fontSize: "2rem" }}>⚡</div>
            <h5 style={{ color: "#0f172a", marginTop: "6px" }}>
              Fast Browsing
            </h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              search and you can easly show all our products
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card h-100 text-center border-0 shadow-sm p-3"
            style={{ borderRadius: "16px", background: "#ffffff" }}
          >
            <div style={{ fontSize: "2rem" }}>📦</div>
            <h5 style={{ color: "#0f172a", marginTop: "6px" }}>
              Product Details
            </h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              view all details about each product
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card h-100 text-center border-0 shadow-sm p-3"
            style={{ borderRadius: "16px", background: "#ffffff" }}
          >
            <div style={{ fontSize: "2rem" }}>🛠️</div>
            <h5 style={{ color: "#0f172a", marginTop: "6px" }}>
              Easy 
            </h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Add, edit, and organize products in a simple workflow.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}