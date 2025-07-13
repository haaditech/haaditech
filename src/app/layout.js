import "./globals.css";

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
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
