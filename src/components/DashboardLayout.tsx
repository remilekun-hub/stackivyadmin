import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { userSlice } from "@/Hooks/user";
import { Navigate } from "react-router-dom";

function DashboardLayout() {
  const user = userSlice((state) => state.user);

  if (!user) {
    return (
      <>
        <Navigate to={"/"} />
      </>
    );
  }
  return (
    <div className="relative">
      <Sidebar />
      <main className="flex-1 xl:pl-[330px]">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
