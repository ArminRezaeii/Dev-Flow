import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex w-full h-[100vh] items-center justify-center">
      {children}
    </main>
  );
}

export default Layout;
