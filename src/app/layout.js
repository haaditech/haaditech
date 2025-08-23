import "./globals.css";
import AOSInit from './AOSInit' // import the AOSInit client component

export const metadata = {
  title: "HaddiTech",
  description: "Think the Unthinkable",
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
      </head>
      <body className="justify-center flex">
        <AOSInit /> {/* Inject AOS initialization here */}
        {children}
      </body>
    </html>
  );
}
