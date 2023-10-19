import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      Hello world from Layout
      <br />
      <Link to={"/"}>Home</Link>
      <Outlet />
    </>
  );
};

export default Layout;
