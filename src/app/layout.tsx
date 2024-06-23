import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar/TopBar";
import Carousel from "@/components/carrousel/Carousel";
import { NavBar } from "@/components/navBar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { StoreProvider } from "@/components/storeProvider/StoreProvider";
import LoadProducts from "@/redux/loadProducts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PYF Belleza",
  description: "Tienda de belleza"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const images = [
    "https://casayuli.com.ar/uploads/filemanager/banner-home.jpg",
    "https://casayuli.com.ar/uploads/filemanager/banner-home.jpg"
  ];

  return (
    <StoreProvider>
      <html lang='en'>
        <head>
          <title>PYF Belleza</title>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Kaushan+Script&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
          />
        </head>
        <body className='bg-[#EBDEF0]'>
          <TopBar />
          <LoadProducts />
          <Carousel images={images} />
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
