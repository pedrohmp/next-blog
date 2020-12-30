import { ThemeProvider } from "styled-components";
import SideMenu from "@/components/SideMenu";
import { lightTheme, darkTheme } from "@/styles/themes";
import { useCallback, useState } from "react";
import GlobalStyle from "@/styles/GlobalStyles";

import { Container } from "@/styles/pages/Home";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const themeToggler = useCallback(
    () => (theme === "light" ? setTheme("dark") : setTheme("light")),
    [theme]
  );

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Container>
        <SideMenu themeToggler={themeToggler} />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
