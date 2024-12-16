import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { CSPostHogProvider } from "~/lib/providers";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar";

export const metadata: Metadata = {
    title: "CCRU | Home",
    description: "Welcome to CCRU.",
    icons: [{ rel: "icon", url: "/ccru.svg" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable}`}>
            <ClerkProvider>
                <CSPostHogProvider>
                    <body className="flex h-dvh flex-col">
                        <Navbar />
                        <div className="flex flex-1">{children}</div>
                    </body>
                </CSPostHogProvider>
            </ClerkProvider>
        </html>
    );
}
