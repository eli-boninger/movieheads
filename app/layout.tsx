import type { Metadata } from "next";
import { nunitoSans } from "./ui/fonts";
import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} antialiased bg-main-50`}
      >
        <NavBar />

        <main className="pt-4 pl-4">
          <Providers>
            {children}
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
