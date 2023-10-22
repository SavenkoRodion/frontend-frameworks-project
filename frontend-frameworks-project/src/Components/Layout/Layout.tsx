import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.style";

const Layout = () => {
  return (
    <div style={styles.Container}>
      Hello world from Layout
      <br />
      <Link to={"/"}>Home</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
