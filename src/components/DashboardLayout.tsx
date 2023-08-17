import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <div className="relative">
      <Sidebar />
      <main className="flex-1 xl:pl-[300px]">
        <Outlet context={{ categoryModal, setCategoryModal }} />
      </main>
    </div>
  );
}

export default DashboardLayout;
