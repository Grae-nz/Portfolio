
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VirtualAssistant from "@/components/VirtualAssistant";

export const metadata = {
  title: "The Blue Zone",
  description: "Helping Kiwis better understand prostate cancer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,800;1,800&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <VirtualAssistant />
        <Footer />
      </body>
    </html>
  );
}
