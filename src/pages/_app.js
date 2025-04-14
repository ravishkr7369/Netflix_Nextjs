import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 import { Mulish } from 'next/font/google';
const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})
export default function App({ Component, pageProps }) {
  return (

    <div className={mulish.className}>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}
