
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "#5E9FD1",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        padding: "10px 0",
      }}
    >
      <div className="container-fluid px-lg-5">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          href="/"
        >
          <div
            style={{
              background: "white",
              borderRadius: "50%",
              padding: "6px",
            }}
          >
            <Image
              src="/logo.png"
              alt="our store  Logo"
              width={45}
              height={45}
              priority
            />
          </div>

          <span
            style={{
              fontWeight: "600",
              fontSize: "1.2rem",
              color: "white",
              letterSpacing: "0.5px",
            }}
          >
            our store
          </span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-center gap-2">

            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={{
                    color: pathname === href ? "#ffffff" : "#e0f2fe",
                    fontWeight: pathname === href ? "600" : "400",
                    position: "relative",
                  }}
                >
                  {label}
                  {pathname === href && (
                    <div
                      style={{
                        height: "2px",
                        background: "white",
                        width: "100%",
                        marginTop: "3px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}

            {/* Login Button */}
            <li className="nav-item ms-lg-3">
              <button
                style={{
                  background: "white",
                  color: "#2563eb",
                  border: "none",
                  padding: "6px 16px",
                  borderRadius: "999px",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  transition: "0.3s",
                }}
              >
                sign in
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}