"use server";

import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";
import Header from "./header/header";
import { Container, CssBaseline } from "@mui/material";
import authenticated from "./auth/authenticated";
import logout from "./auth/logout";

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await authenticated();

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header logout={logout} />
          <Container className={isAuthenticated ? "mt-10" : ""}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
