import { SessionProvider } from "next-auth/react";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps, session }) {
  return (
    <div>
      <SessionProvider session={session}>
        {/* <Header></Header> */}
        <Component {...pageProps} />
        {/* <Footer></Footer> */}
      </SessionProvider>
    </div>
  );
}
