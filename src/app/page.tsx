"use client";
import { useState } from 'react';
import Nav from "./sidebar.tsx";
import Main from './head.tsx';
import Activity from "./activity.tsx";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={`home ${isSidebarOpen ? 'ml-72' : 'ml-24'} mt-4 flex`}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
        rel="stylesheet"
      />
      <Nav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Main />
      <Activity />
    </div>
  );
}
