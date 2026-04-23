import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="container py-2" style={{ flex: 1 }}>
        {children}
      </div>
      <Footer />
    </>
  );
}