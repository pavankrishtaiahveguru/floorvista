import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.floorvista.com"),

  title: "Floorvista Design Consultants",

  description:
    "Floorvista Design Consultants — Building Planning, Interior Design, and Structural Design.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Floorvista Design Consultants",
    "Floorvista",
    "Architecture",
    "Architectural Planning",
    "Building Planning",
    "Interior Design",
    "Structural Design",
    "Elevation Design",
    "Architectural Design",
    "Structural Consultants",
    "Interior Design Consultants",
    "Building Design",
    "House Planning",
    "Residential Architecture",
    "Commercial Architecture",
    "Mancherial Architects",
    "Architects in Mancherial",
    "Telangana Architecture",
  ],

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}