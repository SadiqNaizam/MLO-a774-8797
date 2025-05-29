import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string; // For custom styling on the <main> element
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main
        className={cn(
          'ml-[250px] mt-[70px]', // Offset for fixed Sidebar (width 250px) and Header (height 70px)
          'p-6',                  // Padding for content area as per layout requirements
          'min-w-0',              // From layoutRequirements.overall.sizing.mainContent
          'overflow-y-auto',      // From layoutRequirements.overall.sizing.mainContent
          // The body already has bg-background. Ensuring main content area fills viewport height:
          'min-h-[calc(100vh-70px)]', // 100vh minus header height
          className                 // Allow additional classes to be passed
        )}
      >
        {children}
      </main>
    </>
  );
};

export default MainAppLayout;
