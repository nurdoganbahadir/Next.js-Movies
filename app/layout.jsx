import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/header/index";
import Footer from "@/components/footer/index";

const interFontFamily = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
