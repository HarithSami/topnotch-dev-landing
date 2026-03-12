import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TopNotch Dev - Automation, AI & Data Science Solutions',
  description: 'Leading software company specializing in automation, data science, machine learning, and AI. Developing robust full-stack solutions for modern enterprises.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster position="top-center" richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}