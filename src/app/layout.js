import "./globals.css";


export const metadata = {
  title: "DevArt - Programming Related Articles",
  description: "Programming Related Articles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
