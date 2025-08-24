import "./globals.css";
import AOSInit from './AOSInit' // import the AOSInit client component

export const metadata = {
  title: { default: "Haaditech Private Limited", template: "%s | Haaditech Private Limited" },
  description:
    "Haaditech Private Limited delivers innovative IT services and consulting, specializing in software, cloud, and digital solutions to drive business growth.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "Haaditech Private Limited",
    "IT services",
    "SEO Services India",
  ],
  authors: [{ name: "Haaditech Private Limited" }],
  creator: "Haaditech Private Limited",
  openGraph: {
    title: "Haaditech Private Limited",
    description:
      "Haaditech Private Limited delivers innovative IT services and consulting, specializing in software, cloud, and digital solutions to drive business growth.",
    url: "/",
    siteName: "HaadiTech",
    images: [
      {
        url: "/placeholder.svg",
        width: 1200,
        height: 630,
        alt: "HaadiTech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haaditech Private Limited",
    description:
      "We design and build fast, secure, and scalable websites and mobile applications tailored to your business goals.",
    images: ["/placeholder.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.materialdesignicons.com/7.4.47/css/materialdesignicons.min.css"
          rel="stylesheet"
          className="scroll-smooth"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="HaadiTech Pvt Ltd" />
        <meta name="theme-color" content="#004a8f" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta name="twitter:image" content="/placeholder.svg" />

        {/* Google Tag Manager (head) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TWNTZMQH');`,
          }}
        />
      </head>
      <body className="justify-center flex">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TWNTZMQH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <AOSInit /> {/* Inject AOS initialization here */}
        {children}
      </body>
    </html>
  );
}
