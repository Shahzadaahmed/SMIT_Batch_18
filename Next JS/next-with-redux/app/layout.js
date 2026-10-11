import React from "react";
import Navbar from "@/components/navbar/navbar";
import StoreProvider from "@/lib/storeProvider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
