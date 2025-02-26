"use client";

import { Providers } from "./providers";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in ms
      once: false, // Whether animation should happen only once
      offset: 200, // Offset from the element (in px)
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Sachin Gurjar - Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Sachin Gurjar, a passionate software developer creating innovative solutions. Discover my projects and skills."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sachin Gurjar" />
        <meta
          name="keywords"
          content="Sachin Gurjar, portfolio, software developer, projects, coding"
        />
        <meta property="og:title" content="Sachin Gurjar - Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Sachin Gurjar, showcasing innovative software development projects and skills."
        />
        <meta property="og:image" content="https://sachingurjar.netlify.app/_next/image?url=%2Fimages%2Fsachin.HEIC&w=750&q=75" />
        <meta property="og:url" content="https://sachingurjar.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Theme Meta Tag */}
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
