import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="p-[24px]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
