// components/Layout.tsx
import React from 'react';
import Header from './Header.tsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
