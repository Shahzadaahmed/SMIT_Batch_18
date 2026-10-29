import "./globals.css";
import Navbar from "../components/Navbar";
import StoreProvider from "../components/StoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
