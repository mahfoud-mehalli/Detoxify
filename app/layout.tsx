import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import Header from "./(components)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App Title",
  description: "My app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
        {/* <div className='main'>
          <div className='gradient' />
        </div> */}
          <main className='app'>
            <Header />
            {children}
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}