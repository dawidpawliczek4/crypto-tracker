import "~/styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CoinProvider } from "~/providers/CoinContext";
import { ThemeProvider } from "@mui/material";
import theme from "~/lib/theme";
import TopNav from "~/components/TopNav";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Crypto Tracker",
  description: "Crypto Tracker App, created by Dawid Pawliczek",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <CoinProvider>
                <TopNav />
                {children}
                <Toaster
                  theme="dark"
                  toastOptions={{
                    classNames: {
                      toast: "bg-slate-900",
                      title: "text-white",
                      description: "text-white",
                    },
                  }}
                />
              </CoinProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
