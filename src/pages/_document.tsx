import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo.ico" />
          <meta
            name="description"
            content="Chiranjibi Poudyal, Chiranjibi, Full-stack Developer India, Full-stack developer siliguri"
          />
          <meta name="author" content="Chiranjibi Poudyal" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
