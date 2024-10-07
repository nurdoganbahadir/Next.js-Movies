import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

const interFontFamily = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily}>
      <body className="container">{children}</body>
    </html>
  );
}

export default RootLayout;
