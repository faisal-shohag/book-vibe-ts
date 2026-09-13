import type { Metadata } from "next";
import "./globals.css";
import "react-tabs/style/react-tabs.css";
import BookProvider from "@/context/BookContext";
import Navbar from "@/components/shared/navbar/Navbar";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "book-vibe",
  icons: {
    icon: "/book.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <BookProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </BookProvider>
      </body>
    </html>
  );
}
