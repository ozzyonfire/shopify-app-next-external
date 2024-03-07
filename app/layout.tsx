import Providers from "@/providers/providers";
import "./global.css";

export const metadata = {
  title: "Next.js External Shopify App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
