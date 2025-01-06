import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";
import { Providers } from "./providers";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme";
import { nunitoSans } from "./ui/fonts";



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
        className={`${nunitoSans.variable}`}
        style={{ margin: 0, backgroundColor: '#e0f5fe' }}
      >
        <AppRouterCacheProvider>

          <ThemeProvider theme={theme}>
            <NavBar />
            <main style={{ padding: '1rem 0 0 1rem' }}>
              <Providers>
                {children}
              </Providers>
            </main>
          </ThemeProvider>

          <Footer />
        </AppRouterCacheProvider>



      </body>
    </html>

  );
}
