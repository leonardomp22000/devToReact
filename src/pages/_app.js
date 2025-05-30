import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
