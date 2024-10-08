import { Outfit } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Recipe page",
  description: "This challenge will help you focus on writing semantic HTML. Ensure you think through what HTML elements are most appropriate for each piece of content.",
};

const outfit = Outfit({subsets:['latin'], weight:['400','600','700']});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased bg-custom-stone-100`}
      >
        {children}
      </body>
    </html>
  );
}
