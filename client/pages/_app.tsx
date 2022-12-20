import "../styles/globals.css";
import type { AppProps } from "next/app";

import "../styles/style.css";
import "../styles/style.min.css";
import "../styles/about.css";
import "../styles/login.css"; 
import "../styles/cart.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
