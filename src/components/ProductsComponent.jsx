
'use client';
import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product, onSeeMore, onEdit, onDelete }) => {
  return (
    <div
      className="card h-100 border-0"
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "180px",
          background: "#f1f5f9",
        }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          style={{ objectFit: "contain", padding: "16px" }}
        />

        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            backgroundColor: "#dbeafe",
            color: "#1e40af",
            fontSize: "0.7rem",
            fontWeight: "600",
            padding: "4px 10px",
            borderRadius: "999px",
          }}
        >
          {product.category}
        </span>
      </div>

      <div className="card-body d-flex flex-column p-3">
        <h6
          style={{
            color: "#0f172a",
            fontSize: "0.9rem",
            fontWeight: "600",
            minHeight: "40px",
          }}
        >
          {product.title.length > 55
            ? product.title.slice(0, 55) + "..."
            : product.title}
        </h6>

        <p style={{ color: "#2563eb", fontSize: "1.2rem", fontWeight: "700" }}>
          ${product.price}
        </p>

        <div className="d-flex gap-2 mt-auto">
          <button
            className="btn btn-sm flex-grow-1"
            style={{
              background: "#ecfeff",
              color: "#155e75",
              borderRadius: "10px",
              border: "1px solid #a5f3fc",
            }}
            onClick={() => onSeeMore(product)}
          >
            👁 View
          </button>

          <button
            className="btn btn-sm flex-grow-1"
            style={{
              background: "#fff7ed",
              color: "#9a3412",
              borderRadius: "10px",
              border: "1px solid #fed7aa",
            }}
            onClick={() => onEdit(product)}
          >
             Edit
          </button>

          <button
            className="btn btn-sm flex-grow-1"
            style={{
              background: "#fef2f2",
              color: "#991b1b",
              borderRadius: "10px",
              border: "1px solid #fecaca",
            }}
            onClick={() => onDelete(product.id)}
          >
            🗑
          </button>
        </div>
      </div>
    </div>
  );
};
export default function ProductsComponent({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter(p => p.category === selectedCategory);

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleEdit = (id, updated) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  return (
    <div className="container py-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h3 style={{ color: "#0f172a", fontWeight: "600" }}>
          Products 🛍️
        </h3>

        <select
          className="form-select form-select-sm"
          style={{ width: "180px", borderRadius: "10px" }}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {filtered.map(product => (
          <div className="col-md-4 col-lg-3" key={product.id}>
            <ProductCard
              product={product}
              onSeeMore={() => {}}
              onEdit={() => {}}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}