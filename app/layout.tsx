import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'Rian — Developer Portfolio',
  description: 'Minimal typography-focused developer portfolio built with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
