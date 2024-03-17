import "./globals.css";


export const metadata = {
  title: "DevArt - Programming Related Articles",
  description: "Programming Related Articles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="exvbD16MWo-o_oksJDrekaQ_zwY62YGWEA_XdlE5_XM" />
      </head>
      <body>{children}</body>
    </html>
  );
}
