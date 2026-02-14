"use client";

import { useState, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { PanelLeft } from "lucide-react";

export default function ArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      <Navbar />

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <Suspense>
          <Sidebar
            mobileOpen={mobileSidebarOpen}
            onMobileClose={() => setMobileSidebarOpen(false)}
          />
        </Suspense>

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Mobile sidebar toggle */}
          <div className="md:hidden sticky top-16 z-30 bg-canvas-50/95 backdrop-blur-md border-b border-maroon-500/20 px-4 py-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="flex items-center gap-2 text-sm text-parchment-400 hover:text-parchment-200 transition-colors"
            >
              <PanelLeft size={16} />
              Browse Archive
            </button>
          </div>

          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
