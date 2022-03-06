import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/layout/Container";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Container title={router.pathname.substring(1)}>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
