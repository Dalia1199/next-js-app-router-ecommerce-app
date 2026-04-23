import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "@/components/Providers";

export const metadata = { title: "ProductHub" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}