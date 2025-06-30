"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@emotion/react";
import darkTheme from "./dark.theme";
import { Container, CssBaseline } from "@mui/material";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>{children}</Container>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
