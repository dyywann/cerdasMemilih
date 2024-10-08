import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Theme>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Theme>
    </Html>
  );
}
