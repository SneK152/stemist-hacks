import Head from "next/head";
export default function Container({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="STEMist Education's Hackathon" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/logo.svg" /> */}
        <meta name="og:title" property="og:title" content="STEMist Hacks" />
        <meta
          name="og:description"
          property="og:description"
          content="STEMist Education's Hackathon"
        />
        <meta property="og:site_name" content="STEMist Hacks" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="STEMist Hacks" />
        <meta
          name="twitter:description"
          content="STEMist Education's Hackathon"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="application-name" content="STEMist Hacks" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="STEMist Hacks" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <title>
          STEMist Hacks{" "}
          {title ? `| ${title[0].toUpperCase() + title.substring(1)}` : ""}
        </title>
      </Head>
      <div className="overflow-x-hidden">{children}</div>
    </>
  );
}
