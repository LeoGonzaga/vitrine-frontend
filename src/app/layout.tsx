import { Montserrat } from "next/font/google";
import "../../global.css";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Vitrine Local",
  description:
    "Impulsione seu comércio local com a nossa plataforma de gerenciamento de comércios para cidades pequenas. Aumente sua visibilidade, atraia mais clientes e alcance o sucesso sustentável em um mercado competitivo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
