import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-stone-50 text-stone-950">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
