import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Suspense>
        <main className="max-w-xl mx-auto space-y-6">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
