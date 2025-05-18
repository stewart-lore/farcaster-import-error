import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { sdk } from "@farcaster/frame-sdk";

sdk.on("frameAdded", (user) => {
  console.log("user.loggedIn", user);
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
