import "./globals.css";

export const metadata = {
  title: "The Bliss",
  description: "Be a gentlemen to your lady!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
