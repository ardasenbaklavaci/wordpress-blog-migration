import './globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'PC Gaming & Hardware Blog',
  description: 'Discussions about PC gaming, hardware, benchmarks, and tech reviews',
  keywords: 'PC gaming, hardware, benchmarks, discussion',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourdomain.eu.org" />
      </head>
      <body className="bg-gray-900 text-gray-100">
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 border-b border-gray-700">
            <nav className="max-w-4xl mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-gaming-accent">
                  💻 Gaming & Hardware
                </a>
                <div className="space-x-6">
                  <a href="/" className="hover:text-gaming-accent transition">
                    Home
                  </a>
                  <a href="/blog" className="hover:text-gaming-accent transition">
                    Blog
                  </a>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
            {children}
          </main>

          <footer className="bg-gray-800 border-t border-gray-700 mt-12">
            <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-400">
              <p>&copy; 2025 PC Gaming & Hardware Blog. All rights reserved.</p>
              <p className="text-sm mt-2">
                Migrated from WordPress.com to Next.js + Vercel
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
