import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Theme>
        <Head>
          <meta name="google-site-verification" content="DbzRqplosLehaITJKn7MgusDkmDViQ2oCA8jFv6eYI8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Theme>
    </Html>
  );
}
