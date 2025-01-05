'use client';

import { Roboto } from "next/font/google";
import "./globals.css";

// Configuração da fonte Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Você pode especificar os pesos que quer usar (normal e bold, por exemplo)
});

import { FormProvider } from '@/contexts/formContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}

