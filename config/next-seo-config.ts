import { NextSeoProps } from "next-seo";

const defaultNextConfig: NextSeoProps = {
  title: "Your adventure awaits",
  titleTemplate: "%s | Atlas Travel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://at.eddienaff.dev/",
    site_name: "Atlas Travel"
  },
  twitter: {
    handle: "@theednaffattack",
    site: "@theednaffattack",
    cardType: "summary_large_image"
  }
};

export default defaultNextConfig;

{
  /* <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */
}
