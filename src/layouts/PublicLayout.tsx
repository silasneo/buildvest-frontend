import { ReactNode } from 'react';

/**
 * PublicLayout
 * 
 * Layout shell for public-facing pages (homepage, marketing, about, etc.)
 * 
 * Purpose:
 * - Wraps all unauthenticated public pages
 * - Will contain public header/footer when implemented
 * - No authentication or role checks required
 * 
 * TODO:
 * - Add public header component
 * - Add public footer component
 * - Implement navigation menu
 */

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="public-layout">
      {/* TODO: Add public header */}
      <header>
        {/* Placeholder for public navigation */}
      </header>

      <main>
        {children}
      </main>

      {/* TODO: Add public footer */}
      <footer>
        {/* Placeholder for footer content */}
      </footer>
    </div>
  );
}
