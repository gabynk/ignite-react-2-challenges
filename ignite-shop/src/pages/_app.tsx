import { globalStyles } from "@/styles/globalCss";
import type { AppProps } from "next/app";
import { Container } from "@/styles/pages/app";
import { Header } from "@/components/Header";
import { CartProvider } from "@/hooks/useCart";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
